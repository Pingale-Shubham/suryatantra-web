<?php
declare(strict_types=1);

date_default_timezone_set('Asia/Kolkata');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: ./contact.html');
    exit;
}

function quote_field(string $key, int $max, bool $keepLines = false): string
{
    $value = trim(strip_tags((string) ($_POST[$key] ?? '')));
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    if (!$keepLines) {
        $value = str_replace("\n", ' ', $value);
    }
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max);
    }
    return substr($value, 0, $max);
}

function quote_redirect(string $result, string $extra = ''): void
{
    if (PHP_SAPI === 'cli') {
        fwrite(STDOUT, $result . PHP_EOL);
        exit($result === 'sent' ? 0 : 1);
    }
    header('Location: ./contact.html?sent=' . ($result === 'sent' ? '1' : '0') . $extra);
    exit;
}

$name = quote_field('name', 80);
$phone = quote_field('phone', 30);
$email = quote_field('email', 120);
$company = quote_field('company', 120);
$product = quote_field('product', 160);
$quantity = quote_field('quantity', 40);
$city = quote_field('city', 80);
$pincode = quote_field('pincode', 12);
$message = quote_field('message', 2000, true);
$page = quote_field('source_page', 80);
$source = quote_field('lead_source', 80);
$landing = quote_field('landing_page', 80);
$channel = quote_field('channel', 20);
$isQuestion = $channel === 'question';
$redirectExtra = $isQuestion ? '&ask=1' : '';

if ($isQuestion) {
    if ($name === '' || $message === '' || ($phone === '' && $email === '')) {
        quote_redirect('missing', $redirectExtra);
    }
    if ($phone === '') {
        $phone = '—';
    }
    if ($company === '') {
        $company = '—';
    }
    if ($product === '') {
        $product = 'Visitor question';
    }
    if ($quantity === '') {
        $quantity = '—';
    }
    if ($city === '') {
        $city = '—';
    }
} else {
    foreach ([$name, $phone, $company, $product, $quantity, $city] as $value) {
        if ($value === '') {
            quote_redirect('missing');
        }
    }
}

$reply = filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : '';
$to = 'suryatantraa@gmail.com';
$subject = $isQuestion ? 'Visitor question from ' . $name : 'Quote request: ' . $product;
$body = implode("\n", [
    $isQuestion
        ? 'A visitor sent a question from the Suryatantra website.'
        : 'New quote request from the Suryatantra website.',
    '',
    'Name: ' . $name,
    'Phone: ' . $phone,
    'Email: ' . ($reply !== '' ? $reply : $email),
    'Company: ' . $company,
    'Tool or part: ' . $product,
    'Quantity: ' . $quantity,
    'City: ' . $city,
    'Pincode: ' . $pincode,
    'Page: ' . $page,
    'Source: ' . $source,
    'Landing page: ' . $landing,
    '',
    'Message:',
    $message !== '' ? $message : 'Quote request',
]);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Suryatantra Website <suryatantraa@gmail.com>',
];
if ($reply !== '') {
    $headers[] = 'Reply-To: ' . $reply;
}

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

$lead = [
    'id' => bin2hex(random_bytes(8)),
    'date' => date('c'),
    'name' => $name,
    'phone' => $phone,
    'company' => $company,
    'product' => $product,
    'quantity' => $quantity,
    'city' => $city,
    'pincode' => $pincode,
    'email' => $reply !== '' ? $reply : $email,
    'message' => $message !== '' ? $message : 'Quote request',
    'channel' => $isQuestion ? 'question' : 'form',
    'page' => $page,
    'landing' => $landing,
    'source' => $source !== '' ? $source : 'Direct',
    'referrer' => '',
    'status' => 'new',
    'emailed' => $sent ? 'yes' : 'no',
];

require_once __DIR__ . '/private.php';
$privateDir = suryatantra_private_dir();
$leadsFile = $privateDir . '/leads.json';
$statsFile = $privateDir . '/stats.json';
$saved = false;
$handle = fopen($leadsFile, 'c+');
if ($handle !== false) {
    flock($handle, LOCK_EX);
    $raw = stream_get_contents($handle);
    $leads = json_decode($raw === false ? '' : $raw, true);
    if (!is_array($leads)) {
        $leads = [];
    }
    $leads[] = $lead;
    if (count($leads) > 2000) {
        $leads = array_slice($leads, -2000);
    }
    $encoded = json_encode($leads, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    if ($encoded !== false) {
        rewind($handle);
        ftruncate($handle, 0);
        fwrite($handle, $encoded);
        fflush($handle);
        $saved = true;
    }
    flock($handle, LOCK_UN);
    fclose($handle);
}

$statsHandle = fopen($statsFile, 'c+');
if ($statsHandle !== false) {
    flock($statsHandle, LOCK_EX);
    $rawStats = stream_get_contents($statsHandle);
    $stats = json_decode($rawStats === false ? '' : $rawStats, true);
    if (!is_array($stats)) {
        $stats = ['formSends' => 0, 'whatsappClicks' => 0, 'byPage' => [], 'bySource' => []];
    }
    $stats['formSends'] = (int) ($stats['formSends'] ?? 0) + 1;
    $pageKey = $page !== '' ? $page : 'contact.html';
    $sourceKey = $source !== '' ? $source : 'Direct';
    if (!isset($stats['byPage']) || !is_array($stats['byPage'])) {
        $stats['byPage'] = [];
    }
    if (!isset($stats['bySource']) || !is_array($stats['bySource'])) {
        $stats['bySource'] = [];
    }
    $stats['byPage'][$pageKey] = (int) ($stats['byPage'][$pageKey] ?? 0) + 1;
    $stats['bySource'][$sourceKey] = (int) ($stats['bySource'][$sourceKey] ?? 0) + 1;
    $encodedStats = json_encode($stats, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    if ($encodedStats !== false) {
        rewind($statsHandle);
        ftruncate($statsHandle, 0);
        fwrite($statsHandle, $encodedStats);
        fflush($statsHandle);
    }
    flock($statsHandle, LOCK_UN);
    fclose($statsHandle);
}

quote_redirect(($sent || $saved) ? 'sent' : 'failed', $redirectExtra . ($sent ? '' : '&mail=0'));
