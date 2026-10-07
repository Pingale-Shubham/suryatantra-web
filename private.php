<?php
declare(strict_types=1);

function suryatantra_private_dir(): string
{
    $dir = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'suryatantra-private';
    if (!is_dir($dir) && !mkdir($dir, 0700, true) && !is_dir($dir)) {
        throw new RuntimeException('Private data folder is not available.');
    }
    return $dir;
}
