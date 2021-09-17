<?php
$check = trim($argv[1]);
$phpPath = trim($argv[2]);
$path = trim($argv[3]);

if (strpos($path, '.php') != (strlen($path) - 4)) {
  echo "!ERROR - path provided doesn't end in a php file.";
  return;
}

$jsonObject = exec($phpPath . ' ' . $path . ' ' . $check);
$phpArray = json_decode($jsonObject, true);

try {
  if ($phpArray['statusCode'] == 200 &&
    trim($phpArray['body']) == $check) {
      echo 'success';
    }
} catch(Exception $e) {
    echo "!ERROR $e";
}
?>
