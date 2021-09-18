# Get Back!

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a PHP script that implements working versions of the broken functions listed here.</li>
  <li>Provide the full path to that PHP script in the text field on the right and click <em>HACK</em>.
</ul>
</div>

The control panel on this gate is displaying several failed tests due to unexpected output.

Create a new PHP file that contains working versions of the functions found in the test output below - `securityStatusByColorCode` and `tumblerRotationCheck`.

Use PHP's [continue](https://www.php.net/manual/en/control-structures.continue.php), [break](https://www.php.net/manual/en/control-structures.break.php), and [return](https://www.php.net/manual/en/function.return.php) [control structures](https://www.php.net/manual/en/language.control-structures.php) to alter the functions' behavior and return the expected output.

Copy the path to your php file into the input field and click *HACK* to reboot the locking mechanism with your fixed functions.

## TESTING OUTPUT

> !TEST FAILED - UNEXPECTED OUTPUT
```
function securityStatusByColorCode($colorCode)
{
  $status = [ 'colorCode' => $colorCode ];
  switch ($colorCode) {
    case 'red':
      $status['name'] = 'Lock Down';
      $status['protocol'] = 'No Access';
    case 'orange':
      $status['name'] = 'Emergency';
      $status['protocol'] = 'Responders Only';
    case 'yellow':
      $status['name'] = 'Alert';
      $status['protocol'] = 'Active Duty Only';
    case 'green':
      $status['name'] = 'Normal';
      $status['protocol'] = 'Standard';
    case 'blue':
      $status['name'] = 'Hospitality';
    case 'indigo':
      $status['name'] = 'Maintenance';
    case 'violet':
      $status['name'] = 'Offline';
      $status['protocol'] = 'Open';
    default:
      $status['name'] = 'Unknown';
      $status['protocol'] = 'No Access';
  }
  return $status;
}
```
> !TEST FAILED - UNEXPECTED OUTPUT
```
function tumblerRotationCheck($tumblerCount)
{
  $tumblerStatus = array_fill(0, $tumblerCount, 'unchecked');
  for ($i = 0; $i < $tumblerCount; $i++) {
    $left = rotateLeft($i, 360);
    if (!$left) {
      $tumblerStatus[$i] = 'fail';
    }
    $right = rotateRight($i, 360);
    if (!$right) {
      $tumblerStatus[$i] = 'fail';
    }
    $disengage = disengage($i);
    if (!$disengage) {
      $tumblerStatus[$i] = 'fail';
    }
    $engage = engage($i);
    if (!$engage) {
      $tumblerStatus[$i] = 'critical fail';
    }
    $tumblerStatus[$i] = 'success';
  }
  return $tumblerStatus;
}
```
