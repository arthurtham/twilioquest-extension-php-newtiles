const jetpack = require('fs-jetpack');
const phpValidator = require('../../validation/php_validator');

module.exports = async helper => {
  try {
    let { scriptPath } = helper.validationFields;
    if (scriptPath) {
      scriptPath = scriptPath.trim();
    } else {
      return helper.fail(`Please provide a path to your script.`);
    }

    // Validate path exists
    const exists = await jetpack.existsAsync(scriptPath);
    if (!exists) {
      return helper.fail(`
        The script path you provided does not exist. Please double-check that
        it is correct and try again.
      `);
    }

    // Execute PHP validation logic
    const result = await phpValidator(
      helper.env.TQ_PHP_PATH,
      'continue_break_return.php',
      [scriptPath]
    );
    console.log(result);

    if (!result.success) {
      return helper.fail(`
        Sorry - there was an error evaluating your PHP code. Here is the
        error we got when we tried to test it:<br/><br/>
        ${result.message}
      `);
    } else {
      return helper.success(`
        That did it! The tests are green and the gate is open.
      `);
    }
  } catch (e) {
    console.log(e);
    return helper.fail(`
      There was an error executing your code. Please ensure that you
      can run it successfully and try again. Here's the error we got - sorry
      if the formatting is ugly: <br/><br/>
      ${e}
    `);
  }
};
