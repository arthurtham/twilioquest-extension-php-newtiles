# Objective Help

The purpose of this objective is to get comfortable with creating PHP scripts, and serving them using the [built-in dev server](https://www.php.net/manual/en/features.commandline.webserver.php). To complete this objective, you will need to start byt doing the following:

* Open a terminal application
* Create a folder where your PHP scripts will live
* Create a PHP script in this folder named anything you like, but with a `.php` extension

If you have trouble doing any of the following, you can try completing the first few objectives of the "Dev Skills" mission, which can be found in the Mission Computer on the Fog Owl.

## Hello World

Initially, you should put the following code in your PHP file:

```php
<?php echo "Hello World!"; ?>
```

Next, use PHP's [built-in dev server](https://www.php.net/manual/en/features.commandline.webserver.php) to make your code executable through HTTP requests in the browser (or anywhere!):

```bash
php -S localhost:8000
```

You can confirm that the output is what you expect by visiting `http://localhost:8000/yourscript.php` in a web browser.

When the output is what you expect, click the *HACK* button and **look for clues to today's access code** in the error.

When you have the code, replace `Hello World!` in your PHP script with today's access code. Once you have done this, click *HACK* again to check your work!
