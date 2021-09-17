# Operation Lockpick

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a PHP script that implements working versions of the broken functions listed here.</li>
  <li>Provide the full path to that PHP script in the text field on the right and click <em>HACK</em>.
</ul>
</div>

The access panel on this chest is displaying several unreachable code errors, preventing you from opening it. In order to open the chest, you'll need to patch the PHP code used to power the locking mechanism.

The misbehaving functions are listed below. Create a new PHP file that contains working versions of the functions found in the error output below - `isABotCheck`, `passwordCheck`, `securityAnswerCheck`, and `passwordTriesHitLimit`.

Don't forget to add the `<?php` tag at the beginning of your script content.

Each function contains a small syntax error that you must find and fix.

Once you have created a PHP file that contains working versions of all four functions, enter the path to that file in the text field on the right. Click *HACK* to attempt to patch the access panel with your new code.

## Error Output

You see the following errors scrolling across the access panel.

> !ERROR UNREACHABLE CODE IN FUNCTION. BOT CHECK FAILED.

```
function isABotCheck($isABot = true)
{
  if ($isABot = true) {
    return true;
  }
  return false;
}
```

> !ERROR UNREACHABLE CODE IN FUNCTION. PASSWORD CHECK FAILED.

```
function passwordCheck($providedPassword, $actualPassword)
{
  if (!$providedPassword = $actualPassword) {
    return false;
  }
  return true;
}
```

> !ERROR UNREACHABLE CODE IN FUNCTION. SECURITY ANSWER CHECK FAILED.

```
function securityAnswerCheck($providedAnswer, $actualAnswer)
{
  if (strpos($actualAnswer, $providedAnswer) === true) {
    return true;
  }
  return false;
}
```

> !ERROR UNREACHABLE CODE IN FUNCTION. TOO MANY PASSWORD TRIES.

```
function passwordTriesHitLimit($tries)
{
  $limit = 5;
  if ($tries > $limit && $tries < 0) {
    return false;
  }
  return true;
}
```
