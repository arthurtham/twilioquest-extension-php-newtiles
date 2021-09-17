# Infinite in all directions

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a PHP script that implements working versions of the broken functions listed here.</li>
  <li>Provide the full path to that PHP script in the text field on the right and click <em>HACK</em>.
</ul>
</div>

The control panel on this fountain is displaying several infinite loop errors.

The misbehaving functions are listed below. Create a new PHP file that contains working versions of the functions found in the error output below - `pipeRoutePressureCheck`, `evaluateFilter`, and `grantWish`.

Copy the path to your php file into the input field and click `HACK` to reboot the locking mechanism with your fixed functions.

## ERROR OUTPUT

> !ERROR INFINITE LOOP IN FUNCTION
```
function pipeRoutePressureCheck($route)
{
  foreach ($route as $point) {
    $point['pressurized'] = evaluateForLeaks($point);
    $route[] = $point;
  }
  return $route;
}
```
> !ERROR INFINITE LOOP IN FUNCTION
```
function evaluateFilter($filter)
{
  $testsComplete = 0;
  while ($testsComplete < 10) {
    if (stressTest($filter)) {
       $testsComplete = 1;
    } else {
      $filter['stressTest'] = 'failed';
    }
  }
  return $filter;
}
```
> !ERROR INFINITE LOOP IN FUNCTION
```
function grantWish($coin, $wish)
{
  $pause = rand(1,30);
  for ($i = 0; $i < 30; $i++) {
    if ($i = $pause && goodIntentions($wish) && hasValue($coin)) {
         return true;
    }
  }
  return false;
}
```
