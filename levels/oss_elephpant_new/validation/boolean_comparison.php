<?php
try {
  $path = trim($argv[1]);

  $stringify = file_get_contents($path);

  echo $stringify;

  if (strpos($stringify, '<?php') === false) {
    var_dump($stringify);
    throw new Exception('Opening php tag not found in script.');
  }

  include($path);

  if (!function_exists('isABotCheck')) {
    throw new Exception('The isABotCheck function is not defined.');
  }

  if (!function_exists('passwordCheck')) {
    throw new Exception('The passwordCheck function is not defined.');
  }

  if (!function_exists('securityAnswerCheck')) {
    throw new Exception('The securityAnswerCheck function is not defined.');
  }

  if (!function_exists('passwordTriesHitLimit')) {
    throw new Exception('The passwordTriesHitLimit function is not defined.');
  }

  if (isABotCheck(true) === false) {
    throw new Exception('isABotCheck does not behave as expected: passing check returned false.');
  }

  if (isABotCheck(false) === true) {
    throw new Exception('isABotCheck does not behave as expected: failing check returned true.');
  }

  if (passwordCheck('rightPassword', 'rightPassword') === false) {
    throw new Exception('passwordCheck does not behave as expected: matching passwords returned false; expected true.');
  }

  if (passwordCheck('wrongPassword', 'rightPassword') === true) {
    throw new Exception('passwordCheck does not behave as expected: mismatched passwords returned true; expected false.');
  }

  if (securityAnswerCheck('wrongAnswer', 'rightAnswer') === true) {
    throw new Exception('securityAnswerCheck does not behave as expected: incorrect answer evaluated true; expected false.');
  }

  if (securityAnswerCheck('rightAnswer', 'rightAnswer') === false) {
    throw new Exception('securityAnswerCheck does not behave as expected: correct answer evaluated false; expected true.');
  }

  if (passwordTriesHitLimit(6) === false) {
    throw new Exception('passwordTriesHitLimit does not behave as expected: tries greater than limit returned false; expected true;');
  }

  if (passwordTriesHitLimit(3) === true) {
    throw new Exception('passwordTriesHitLimit does not behave as expected: tries less than limit returned true; expected false.');
  }

  // Success means script exits with status code 0
  echo 'Validation successful!';
} catch(Exception | Error $e) {
  // Write exception message to stderr
  fwrite(STDERR, $e->getMessage());
  exit(1);
}
?>
