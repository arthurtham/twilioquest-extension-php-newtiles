# Operation Lockpick

The access panel on this chest is displaying several unreachable code errors. Create a new PHP file containing working versions of the broken functions shown in the error messages.

Copy the path to your PHP file into the input field and click *HACK* to reboot the locking mechanism with your fixed functions.

## "Unreachable Code"

Each function in the error message has "unreachable code". That means there's a conditional statement which will either always or never evaluate to true.

Create a new PHP file and copy the functions from the error messages into the new script.

Don't forget to add the `<?php` tag at the beginning of your script content.

## Incomparable

Use [information on PHP's comparison operators](https://phptherightway.com/pages/The-Basics.html) to identify each conditional statement and determine why it either always evaluate to true or always evaluate to false.

## Double or nothing

One of the functions contains a complex conditional, where [a PHP function, strpos()](https://www.php.net/manual/en/function.strpos.php), is first evaluated and its output is then used in the comparison. Be sure to understand how strpos() works as part of this comparison to determine how to correct the behavior.

## Testing makes perfect

To test how these broken functions act, add the following underneath the functions in the same PHP file:

```php
$isABot = isABotCheck(true);
$passwordCheck = passwordCheck('provided password', 'actual password');
$securityAnswerCheck = securityAnswerCheck('provided answer', 'actual answer');
$passwordTries = passwordTriesHitLimit(3);
print 'is a bot check: ';
var_dump($isABot);
print 'password check: ';
var_dump($passwordCheck);
print 'security answer: ';
var_dump($securityAnswerCheck);
print 'password tries: ';
var_dump($passwordTries);
```

## Functioning == true

Once the output from the functions matches what you would expect with various input, delete or comment your testing output, and copy the path into the input field and click *HACK* to reboot the locking function with your fixed functions.
