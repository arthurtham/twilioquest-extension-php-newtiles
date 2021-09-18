# Learning acceptance

Write a simple php script which:
1) accepts a string and
2) returns a json object with
3) 'statusCode' and 'body' properties
4) containing 200 and the submitted string respectively.

## Namespaces

Use [Composer's autoloader](https://getcomposer.org/doc/01-basic-usage.md#autoloading) to use Guzzle within your script.

## Accepting arguments

Php automatically creates an array, `$argv`, when initiating a script which can be [used to access arguments](https://www.php.net/manual/en/reserved.variables.argv.php).

## Creating a json object

Any php array can be [converted into a json object](https://www.php.net/manual/en/function.json-encode) using the `json_encode()` function.
