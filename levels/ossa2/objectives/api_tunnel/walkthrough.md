# Flow motion

<div class="aside">
<h3>To-Do List</h3>
<ul>
  <li>Create a script that expects a URL argument.</li>
  <li>Have the script make a Guzzle GET request to the provided URL.</li>
  <li>Have the script return a json object containing `statusCode` and `body` key value pairs from the Guzzle response.
  <li>Provide the full path to the script in the text field on the right and click <em>HACK</em>.
</ul>
</div>

This workbench is currently locked up and unusable because it's not being able to reach an external API.

In the directory with your composer.json, where you've installed Guzzle, create a script which accepts a url as an argument and returns a json object containing the response's statusCode and body.

## Accepting arguments

Php automatically creates an array, `$argv`, when initiating a script which can be [used to access arguments](https://www.php.net/manual/en/reserved.variables.argv.php).

## Using Guzzle

Follow the [documentation to create a Guzzle client](http://docs.guzzlephp.org/en/stable/index.html) and a request using the user provided url.

## Creating a json object

Any php array can be [converted into a json object](https://www.php.net/manual/en/function.json-encode) using the `json_encode()` function.
