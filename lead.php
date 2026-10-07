<?php
declare(strict_types=1);

date_default_timezone_set('Asia/Kolkata');
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST);
    $host = preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? '');
    if (!$originHost || strcasecmp((string) $originHost, (string) $host) !== 0) {
        http_response_code(403);
        echo json_encode(['ok' => false, 'error' => 'Forbidden']);
        exit;
    }
}

require __DIR__ . '/private.php';
$dataDir = suryatantra_private_dir();
$config = require $dataDir . '/config.php';
$leadsFile = $dataDir . '/leads.json';
$statsFile = $dataDir . '/stats.json';

if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

function clean_text($value, int $max): string
{
    $value = trim(strip_tags((string) $value));
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max);
    }
    return substr($value, 0, $max);
}

function read_store(string $file, $fallback)
{
    if (!is_file($file)) {
        return $fallback;
    }
    $decoded = json_decode((string) file_get_contents($file), true);
    return is_array($decoded) ? $decoded : $fallback;
}

function write_store(string $file, $fallback, callable $mutator)
{
    $handle = fopen($file, 'c+');
    if ($handle === false) {
        return null;
    }
    flock($handle, LOCK_EX);
    $raw = stream_get_contents($handle);
    $data = json_decode($raw === false ? '' : $raw, true);
    if (!is_array($data)) {
        $data = $fallback;
    }
    $data = $mutator($data);
    $encoded = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    if ($encoded === false) {
        flock($handle, LOCK_UN);
        fclose($handle);
        return null;
    }
    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, $encoded);
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
    return $data;
}

function bump(array $stats, string $bucket, string $key): array
{
    if (!isset($stats[$bucket]) || !is_array($stats[$bucket])) {
        $stats[$bucket] = [];
    }
    $stats[$bucket][$key] = (int) ($stats[$bucket][$key] ?? 0) + 1;
    return $stats;
}

function empty_stats(): array
{
    return [
        'formSends' => 0,
        'whatsappClicks' => 0,
        'byPage' => [],
        'bySource' => [],
    ];
}

function authorized(array $input, array $config): bool
{
    $password = (string) ($input['password'] ?? '');
    $expected = (string) ($config['password'] ?? '');
    return $expected !== '' && hash_equals($expected, $password);
}

$raw = file_get_contents('php://input');
$input = json_decode($raw === false ? '' : $raw, true);
if (!is_array($input)) {
    $input = $_POST;
}

$action = clean_text($input['action'] ?? '', 20);

if ($action === 'lead' && ($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
    $channel = clean_text($input['channel'] ?? '', 20);
    if (!in_array($channel, ['form', 'whatsapp'], true)) {
        http_response_code(422);
        echo json_encode(['ok' => false, 'error' => 'Unknown channel']);
        exit;
    }

    $lead = [
        'id' => bin2hex(random_bytes(8)),
        'date' => date('c'),
        'name' => clean_text($input['name'] ?? '', 80),
        'phone' => clean_text($input['phone'] ?? '', 30),
        'company' => clean_text($input['company'] ?? '', 120),
        'product' => clean_text($input['product'] ?? '', 160),
        'quantity' => clean_text($input['quantity'] ?? '', 40),
        'city' => clean_text($input['city'] ?? '', 80),
        'email' => clean_text($input['email'] ?? '', 120),
        'message' => clean_text($input['message'] ?? '', 2000),
        'channel' => $channel,
        'page' => clean_text($input['page'] ?? '', 80),
        'landing' => clean_text($input['landing'] ?? '', 80),
        'source' => clean_text($input['source'] ?? 'Direct', 80),
        'referrer' => clean_text($input['referrer'] ?? '', 300),
        'status' => 'new',
    ];

    if ($lead['name'] === '' || $lead['phone'] === '' || $lead['company'] === '' || $lead['product'] === '' || $lead['quantity'] === '' || $lead['city'] === '') {
        http_response_code(422);
        echo json_encode(['ok' => false, 'error' => 'Name, phone, company, part, quantity, and city are required']);
        exit;
    }

    $saved = write_store($leadsFile, [], function ($leads) use ($lead) {
        $leads[] = $lead;
        if (count($leads) > 2000) {
            $leads = array_slice($leads, -2000);
        }
        return $leads;
    });

    if ($channel === 'form') {
        write_store($statsFile, empty_stats(), function ($stats) use ($lead) {
            $stats['formSends'] = (int) ($stats['formSends'] ?? 0) + 1;
            $stats = bump($stats, 'byPage', $lead['page'] !== '' ? $lead['page'] : 'unknown');
            $stats = bump($stats, 'bySource', $lead['source'] !== '' ? $lead['source'] : 'Direct');
            return $stats;
        });
    }

    if ($saved === null) {
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => 'Could not save the enquiry']);
        exit;
    }

    echo json_encode(['ok' => true, 'id' => $lead['id']]);
    exit;
}

if ($action === 'event' && ($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
    $type = clean_text($input['type'] ?? '', 20);
    if ($type !== 'whatsapp') {
        http_response_code(422);
        echo json_encode(['ok' => false, 'error' => 'Unknown event']);
        exit;
    }
    $page = clean_text($input['page'] ?? 'unknown', 80);
    $source = clean_text($input['source'] ?? 'Direct', 80);
    $saved = write_store($statsFile, empty_stats(), function ($stats) use ($page, $source) {
        $stats['whatsappClicks'] = (int) ($stats['whatsappClicks'] ?? 0) + 1;
        $stats = bump($stats, 'byPage', $page !== '' ? $page : 'unknown');
        $stats = bump($stats, 'bySource', $source !== '' ? $source : 'Direct');
        return $stats;
    });
    if ($saved === null) {
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => 'Could not save the count']);
        exit;
    }
    echo json_encode(['ok' => true]);
    exit;
}

if (!authorized($input, $config)) {
    http_response_code(401);
    echo json_encode(['ok' => false, 'error' => 'Unauthorized']);
    exit;
}

if ($action === 'list') {
    $leads = read_store($leadsFile, []);
    $stats = read_store($statsFile, empty_stats());
    usort($leads, function ($a, $b) {
        return strcmp((string) ($b['date'] ?? ''), (string) ($a['date'] ?? ''));
    });
    echo json_encode(['ok' => true, 'leads' => $leads, 'stats' => $stats]);
    exit;
}

if ($action === 'status' && ($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
    $id = clean_text($input['id'] ?? '', 40);
    $status = clean_text($input['status'] ?? '', 20);
    if (!in_array($status, ['new', 'quoted', 'won'], true)) {
        http_response_code(422);
        echo json_encode(['ok' => false, 'error' => 'Unknown status']);
        exit;
    }
    $found = false;
    $saved = write_store($leadsFile, [], function ($leads) use ($id, $status, &$found) {
        foreach ($leads as &$lead) {
            if (($lead['id'] ?? '') === $id) {
                $lead['status'] = $status;
                $found = true;
                break;
            }
        }
        return $leads;
    });
    if ($saved === null || !$found) {
        http_response_code($found ? 500 : 404);
        echo json_encode(['ok' => false, 'error' => $found ? 'Could not update' : 'Enquiry not found']);
        exit;
    }
    echo json_encode(['ok' => true]);
    exit;
}

http_response_code(404);
echo json_encode(['ok' => false, 'error' => 'Not found']);
