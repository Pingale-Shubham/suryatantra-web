<?php
declare(strict_types=1);

function suryatantra_private_dir(): string
{
    $outside = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'suryatantra-private';
    if (is_file($outside . DIRECTORY_SEPARATOR . 'config.php')) {
        return $outside;
    }

    $local = __DIR__ . DIRECTORY_SEPARATOR . 'data';
    if (!is_dir($local) && !mkdir($local, 0750, true) && !is_dir($local)) {
        throw new RuntimeException('Private data folder is not available.');
    }
    return $local;
}
