<?php

function tidyComposerVersion($composerVersionString)
{
    $proseTrimmed = str_replace('Composer version ', '', $composerVersionString);
    $versionBreak = explode(' ', $proseTrimmed);
    $versionString = $versionBreak[0];

    return $versionString;
}
$composerExecutionString = 'composer';
if (array_key_exists(1, $argv)) {
  $composerExecutionString = $argv[1];
}
$composerVersionString = exec($composerExecutionString . ' --version');
$composerVersionString = tidyComposerVersion($composerVersionString);

if (substr($composerVersionString, 0, 1) < 1 ||
  (substr($composerVersionString, 2, 1) != 9 && substr($composerVersionString, 2, 2) != 10)) {
    // compoer ^1.9 not installed
    echo 'composer '."(current version: $composerVersionString)";
} else {
    echo 'success';
}
 ?>
