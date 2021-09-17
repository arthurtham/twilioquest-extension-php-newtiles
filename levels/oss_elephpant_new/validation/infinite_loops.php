<?php

function evaluateForLeaks($pipe)
{
  return true;
}
function stressTest($filter)
{
  return false;
}
function goodIntentions($wish)
{
  return $wish != "$";
}
function hasValue($coin)
{
  return $coin >= 1;
}

try {
  $path = trim($argv[1]);
  include($path);

  if (!function_exists('pipeRoutePressureCheck')) {
    throw new Exception('The pipeRoutePressureCheck function is not defined.');
  }

  if (!function_exists('evaluateFilter')) {
    throw new Exception('The evaluateFilter function is not defined.');
  }

  if (!function_exists('grantWish')) {
    throw new Exception('The grantWish function is not defined.');
  }

  $route = [ 1 => [], 2 => [], 3 => []];
  $route = pipeRoutePressureCheck($route);
  if (!array_key_exists('pressurized', $route[1])) {
    throw new Exception('pipeRoutePressureCheck does not behave as expected');
  }

  $filter = [];
  $filter = evaluateFilter($filter);
  if (!array_key_exists('stressTest', $filter)) {
    throw new Exception('evaluateFilter does not behave as expected');
  }

  if (grantWish(0, "spaceship") === true ||
    grantWish(5, "$") === true ||
    grantWish(5, "spaceship") === false) {

    $one = grantWish(0, "spaceship");
    $two = grantWish(5, "$");
    $three = grantWish(5, "spaceship");
    throw new Exception('grantWish does not behave as expected: '."Test 1: $one | Test 2: $two | Test 3: $three");
  }

  // Success means script exits with status code 0
  //echo 'Validation successful!';
  exit(0);
} catch(Exception | Error $e) {
  var_dump($e);
  // Write exception message to stderr
  fwrite(STDERR, $e->getMessage());
  exit(1);
}
?>
