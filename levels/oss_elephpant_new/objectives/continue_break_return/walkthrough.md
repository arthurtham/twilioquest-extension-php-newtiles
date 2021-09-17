# Objective Help

The control panel on this gate is displaying several failed tests due to unexpected output.

Create a new PHP file that contains working versions of the functions found in the test output in the description - `securityStatusByColorCode` and `tumblerRotationCheck`.

Copy the path to your php file into the input field and click `HACK` to reboot the locking mechanism with your fixed functions.

## A matter of time

[The nature of a variable](https://www.php.net/manual/en/language.variables.basics.php) is that its value can be changed. Whether in a linear series of instructions, or through the repetitions of a loop, it's important to capture a variable when it's in the state we need to solve our problem.

Each function in the report failed a test by returning unexpected output. That means a test provided input known to produce a specific output if the function were behaving as expected, but received different output - not an error or exception.

Create a new php file, and copy the functions from the test output in the description into the new script.

Don't forget to add the `<?php` tag at the beginning of your script content.

## Unexpected values

Read each function until you have a guess as to how it's intended to work, then use PHP's [continue](https://www.php.net/manual/en/control-structures.continue.php), [break](https://www.php.net/manual/en/control-structures.break.php), and [return](https://www.php.net/manual/en/function.return.php) [control structures](https://www.php.net/manual/en/language.control-structures.php) to alter the functions' behavior and return the expected output.

## Testing makes perfect

To test how these broken functions act, in addition to running them with test data, you'll also need to create versions of the methods which the `tumblerRotationCheck` function calls for testing.
```
/*
  Multi line comment.
  Commented code will be safely ignored when your script is read by the gate mechanism.
*/
function rotateRight($i)
{
  if ($i == 1) {
    return false;
  }
  return true;
}

function rotateLeft($i)
{
  if ($i == 2) {
    return false;
  }
  return true;
}

function disengage($i)
{
  if ($i == 3) {
    return false;
  }
  return false;
}

function engage($i)
{
  if ($i == 4) {
    return false;
  }
  return true;
}

// tests
$tests = ['red', 'green', 'violet'];
foreach ($tests as $color) {
  $result = securityStatusByColorCode($color);
  var_dump("securityStatusByColorCode($color)");
  var_dump($result);
}

$testFour = tumblerRotationCheck(5);
var_dump($result);
```
When we create fake code like this for a test we either call it a "stub" when we don't need to do anything with the returned data, or a "mock" if a test will rely on the data when determining functionality.

After your functions are testing as you expect, you can comment out your stub functions and the test function calls instead of deleting them.

## Functioning == true

Once the output from the functions matches what you would expect with various input, delete or comment your testing output, and copy the path into the input field and click `HACK` to reboot the locking function with your fixed functions.
