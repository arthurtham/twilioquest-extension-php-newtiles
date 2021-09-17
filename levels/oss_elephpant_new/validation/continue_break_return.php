<?php
/*
PHP Notice: Undefined offset: 0 in /Users/mstaples/javascript/TQkevin/public/levels/oss_elephpant/validation/continue_break_return.php on line 110 tumblerRotationCheck gave unexpected output. stub supplied false but function returned unchecked (expected 'fail').

*/
function rotateRight($i, $degrees)
{
  if ($i == 1) {
    return 0;
  }
  return 1;
}

function rotateLeft($i, $degrees)
{
  if ($i == 2) {
    return 0;
  }
  return 1;
}

function disengage($i)
{
  if ($i == 3) {
    return 0;
  }
  return 1;
}

function engage($i)
{
  if ($i == 4) {
    return 0;
  }
  return 1;
}

// tests
$tests = [
  'red' => [
    'name' => 'Lock Down',
    'protocol' => 'No Access',
    'colorCode' => 'red'
  ],
  'orange' => [
    'name' => 'Emergency',
    'protocol' => 'Responders Only',
    'colorCode' => 'orange'
  ],
  'yellow' => [
    'name' => 'Alert',
    'protocol' => 'Active Duty Only',
    'colorCode' => 'yellow'
  ],
  'green' => [
      'name' => 'Normal',
      'protocol' => 'Standard',
      'colorCode' => 'green'
  ],
  'blue' => [
    'name' => 'Hospitality',
    'protocol' => 'Open',
    'colorCode' => 'blue'
  ],
  'indigo' => [
    'name' => 'Maintenance',
    'protocol' => 'Open',
    'colorCode' => 'indigo'
  ],
  'violet' => [
    'name' => 'Offline',
    'protocol' => 'Open',
    'colorCode' => 'violet'
  ],
  'other' => [
    'name' => 'Unknown',
    'protocol' => 'No Access',
    'colorCode' => 'other'
  ]
];

try {
  $path = trim($argv[1]);
  include($path);

  if (!function_exists('securityStatusByColorCode')) {
    throw new Exception('The securityStatusByColorCode function is not defined.');
  }

  if (!function_exists('tumblerRotationCheck')) {
    throw new Exception('The tumblerRotationCheck function is not defined.');
  }

  foreach ($tests as $color => $expectedResult) {
    $result = securityStatusByColorCode($color);
    if ($result != $expectedResult) {
      $expected = var_export($expectedResult, true);
      $received = var_export($result, true);
      throw new Exception("securityStatusByColorCode gave unexpected output. Supplied color code $color. Expected $expected. Received $received.");
    }
  }

  $tumblerTests = [ 1 => 'rotateRight', 2 => 'rotateLeft', 3 => 'disengage', 4 => 'engage'];
  $testTumblers = tumblerRotationCheck(5);
  var_dump($testTumblers);
  foreach($testTumblers as $tumbler => $result) {
    if ($tumbler <= 3 && $result != 'fail') {
      throw new Exception("tumblerRotationCheck gave unexpected output. $tumblerTests[$tumbler] mock supplied false but function returned $result (expected 'fail').");
    }
    if ($tumbler == 4 && $result != 'critical fail') {
      throw new Exception("tumblerRotationCheck gave unexpected output. $tumblerTests[$tumbler] mock supplied false but function returned $result (expected 'critical fail').");
    }
    if ($tumbler > 4 && $result != 'success') {
        throw new Exception("tumblerRotationCheck gave unexpected output. All stubs supplied true but function returned $result (expected 'success').");
    }
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
