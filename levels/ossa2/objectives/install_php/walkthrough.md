# Objective Help

This objective asks you to [install a PHP runtime](https://www.php.net/manual/en/install.php) on your computer. Specifically, you will need to install **PHP version 7.4 or newer**.

> Note: You can validate and use PHP using the full path and .exe extension; however, most documentation will assume that after you install PHP you will add it to your system PATH, [which takes a few extra steps if you're using Windows](https://www.php.net/manual/en/faq.installation.php#faq.installation.addtopath).

## Check your current versions
You can check to see your current versions (if any) with this [command](https://www.codecademy.com/articles/command-line-commands):

`php -v`

## Installing / upgrading PHP on Mac OS
There are several ways to install PHP on MacOS which you can [read about here](https://phptherightway.com/#getting_started). If you have [Homebrew](https://brew.sh/) installed, you can install PHP using this command:

`brew install php`

or upgrade using the command:

`brew upgrade php`

## Upgrading to PHP 7.4 on Linux
You can find distro specific guidance on upgrading to PHP 7.4 in [this blog post](https://dev.to/pushkaranand/upgrading-to-php-7-4-26dg).

## Upgrading to PHP 7.4 on Windows
If you need to update your PHP version in XAMPP you can [find info here](https://php.tutorials24x7.com/blog/how-to-update-php-version-in-xampp-on-windows).

If you're upgrading in the Laragon development environment, you can [find info here](https://dev.to/stephenjude/upgrading-to-php-7-4-laragon-2po6).

You can find more information on [PHP for Windows here](https://www.php.net/manual/en/install.windows.php).

## Getting the full path to the PHP executable

After you install PHP, the command line interface you use on your computer should have the `php` command available. From the command line on Mac and Linux, you should be able to use this command to get the full path to the PHP runtime:

```bash
which php
```

On Windows in PowerShell, you could use this command:

```bash
Get-Command php.exe | Select-Object -ExpandProperty Definition
```

Once you have PHP installed, and have the full path to the PHP executable using the methods above, paste that path into the text field on the right and click *HACK* to validate your PHP installation!
