# Turing Tested

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a PHP file in a folder on your computer that echoes the text <code>Hello World!</code>.</li>
  <li>Run a PHP dev server on port `8000` which serves your file.</li>
  <li>Enter the name of your PHP script in the text field on the right and click <em>HACK</em>. It will fail the first time, but provide you with a code in the error output.</li>
  <li>Replace <code>Hello World!</code> in your PHP script with the code in the error output.</li>
  <li>Click <em>HACK</em> to test that your scirpt now echoes the code.</li>
</ul>
</div>

You proceed from the utility bay to the ship interior, where you find what appears to be barracks for the ship's crew. From what you can tell, the barracks are currently deserted.

You don't make it far inside the barracks before you encounter this security barrier, which requires a code to unlock. You'll need to **write a basic PHP script** and run it using the [built-in dev server](https://www.php.net/manual/en/features.commandline.webserver.php) to clear this barrier.

In a folder somewhere on your computer, create a PHP file - it can be anywhere you like, and be named anything you like, but it should have a `.php` file extension. Initially, your file should just contain the following PHP code:

```php
<?php echo "Hello World!"; ?>
```

Next, use the [built-in PHP dev server](https://www.php.net/manual/en/features.commandline.webserver.php) to make your script available on port 8000 on your computer:

```bash
php -S localhost:8000
```

You can test that it's working by opening a web browser and navigating to `http://localhost:8000/yourscript.php`.

Once you have done this, enter the name of your script (including the `.php` extension) in the text field on the right and click *HACK*. 

Initially, **this validation will fail!** However, in the error output, you will receive a secret code that you can include in your PHP script. Replace `Hello World!` in your PHP script with the **code in the error output**.

Once your PHP script is using [echo](https://www.php.net/manual/en/function.echo.php) to output the secret code contained within the error feedback, click *HACK* again to validate your work!
