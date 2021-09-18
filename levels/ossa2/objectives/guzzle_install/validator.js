const jetpack = require('fs-jetpack');

module.exports = async (helper) => {
  try {
    let { composerJsonPath } = helper.validationFields;

    if (!composerJsonPath) {
      return helper.fail(`
        Please provide a path to your composer.json file!
      `);
    }

    const exists = await jetpack.existsAsync(composerJsonPath);
    if (!exists) {
      return helper.fail(`
        The path you provided does not exist - please double check the file path
        and try again.
      `);
    }

    let jsonData;
    try {
      jsonData = require(composerJsonPath);
    } catch(e) {
      return helper.fail(`
        The file you provided does not contain valid JSON - please double check
        the file path and try again.
      `);
    }

    if (!jsonData.require || !jsonData.require['guzzlehttp/guzzle']) {
      return helper.fail(`
        We did not find "guzzlehttp/guzzle" in your project's dependencies.
        Please install it with "composer require" and try again.
      `);
    }

    return helper.success(`
      Good job! Guzzle has been installed correctly.
    `);
  } catch (e) {
    helper.fail(`
      There was an error validating the Guzzle dependency. Please ensure that your composer.json looks as you expect and the Guzzle dependency has been installed. Here's the error we got - sorry
      if the formatting is ugly: <br/><br/>
      ${e}
    `);
  }
};
