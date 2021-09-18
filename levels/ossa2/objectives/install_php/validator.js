const util = require('util');
const exec = util.promisify(require('child_process').exec);
const jetpack = require('fs-jetpack');

module.exports = async (helper, callback) => {
  try {
    const { phpExecutionPath } = helper.validationFields;

    const args = [`-r "echo phpversion();"`];
    const [isExecutableValid, errorMessage] = await helper.isExecutableValid(
      phpExecutionPath,
      args
    );

    if (!isExecutableValid) {
      helper.fail(errorMessage);
      return;
    }

    // Check installed PHP version
    const cmd = `${phpExecutionPath} -r "echo phpversion();"`;
    const { stdout, stderr } = await exec(cmd);

    if (stderr) {
      console.error(stderr);
      return helper.fail(`
        Sorry! We couldn't validate your PHP installation. Double-check your
        PHP executable path and try again.
      `);
    }

    // Get major version
    const v = stdout.split('.');
    const version = Number(v[0] + '.' + v[1]);

    // Ensure version 7.4 or greater is installed
    if (isNaN(version) || version < 7.4) {
      return helper.fail(`
        PHP version is less than 7.4 - please install PHP 7.4 or greater.
      `);
    }

    helper.success(
      `
      PHP runtime ${version} has been confirmed - you are now able to access the
      <strong>OSS Elephpant</strong> and the systems within.
    `,
      [
        {
          name: 'PHP_PATH',
          value: phpExecutionPath,
        },
      ]
    );
  } catch (e) {
    helper.fail(`
      There was an error validating your PHP runtime. Please ensure that you
      can run it successfully and try again. Here's the error we got - sorry
      if the formatting is ugly: <br/><br/>
      ${e}
    `);
  }
};
