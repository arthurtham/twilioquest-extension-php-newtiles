# Butterflies and superstrings

The control panel on this fountain is displaying several infinite loop errors. Create a new php file containing working versions of the broken functions shown in the error messages.

Copy the path to your php file into the input field and click `HACK` to reboot the fountain mechanism with your fixed functions.

# Infinite Loops

Each function in the error message contains an "infinite loop". That means there's a loop with a conditional statement which will always evaluate to true causing the loop to repeat forever.

Create a new php file, and copy the functions from the error messages into the new script. Don't forget to add the `<?php` tag at the beginning of your script content.

# Testing makes perfect

To test how these broken functions act, in addition to running them with test data, you'll also need to create versions of the methods which the function call for testing. Create simple versions that accept the expected parameters and returns true.
```
// example:
function evaluateForLeaks($pipe)
{
  return true;
}
```
When we create fake code like this for a test we either call it a "stub" when we don't need to do anything with the returned data, or a "mock" if a test will rely on the data when determining functionality.

After your functions are testing as you expect, you can comment out your stub functions and the test function calls instead of deleting them. The commented code will be safely ignored when your script is read by the fountain mechanism:

```
$route = [ 1 => [], 2 => [], 3 => []];
$route = pipeRoutePressureCheck($route);
print 'pressure check: ';
var_dump($route);

$filter = [];
$filter = evaluateFilter($filter);
print 'filter evaluation: ';
var_dump($filter);

$coin = 25;
$wish = "spaceship"
$granted = grantWish($coin, $wish);
print 'wish granted: ';
var_dump($granted);
```

# Incomparable

Use [information on PHP's loops](https://www.geeksforgeeks.org/php-loops/) [and comparison operators](https://phptherightway.com/pages/The-Basics.html) to identify each conditional statement and determine why it loops forever.

# Actions and consequences

Unlike with a simple if conditional, a loop's conditional evaluation can be effected by what happens within the body of the loop. Be sure to look at how variables in the loop's conditional might be altered by the logic within the loop body.

One of the functions is attempting to assign the value of a nested array [inside a foreach loop](https://www.php.net/manual/en/control-structures.foreach.php). To assign that value, alter the loop to retrieve the relevant key to use in that assignment.

# Double trouble

One of the function contains an if/else conditional that will perpetuate the infinite loop either way -- depending on whether your test stub returns true or false. [Add a break to the else conditional](https://www.php.net/manual/en/control-structures.break.php) for when the check fails.

# Functioning == true

Once the output from the functions matches what you would expect with various input, delete or comment your testing output, and copy the path into the input field and click `HACK` to reboot the locking function with your fixed functions.
