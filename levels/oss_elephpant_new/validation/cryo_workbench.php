<?php

$phpExecutionPath = $argv[1];
$scriptPath = $argv[2];
$urlPath = $argv[3];
$composerValidate = exec($phpExecutionPath . ' ' . $scriptPath . ' ' . $urlPath . '  2>&1', $data);

$data = implode('', $data);
$data = json_decode($data, true);

if (!array_key_exists('statusCode', $data)) {
  echo 'No statusCode found.';
  return;
} elseif (!array_key_exists("body", $data)) {
  echo 'No response body found.';
  return;
} elseif (strpos($data['body'], '"status":"success"') === false) {
  echo 'Valid body content not detected.';
  return;
}
echo 'success';
