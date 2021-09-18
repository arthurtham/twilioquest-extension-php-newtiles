const util = require('util');
const exec = util.promisify(require('child_process').exec);
const jetpack = require('fs-jetpack');

module.exports = async (helper) => {
  try {
    let { composerExecutionPath } = helper.validationFields;
    if (composerExecutionPath) {
      composerExecutionPath = composerExecutionPath.trim();
    } else {
      return helper.fail(`
        Please provide the path to your Composer executable!
      `);
    }

    // Does the path they provided exist?
    const exists = await jetpack.existsAsync(composerExecutionPath);
    if (!exists) {
      return helper.fail(`
        We couldn't find a Composer executable at the path you provided. Please
        double-check the path and try again.
      `);
    }

    // Check installed Composer version
    const cmd = `${composerExecutionPath} --version`;
    const { stdout, stderr } = await exec(cmd);

    if (stderr) {
      console.error(stderr);
      return helper.fail(`
        Sorry! We couldn't validate your Composer installation. Double-check your
        Composer executable path and try again.
      `);
    }

    // Get major version
    const v = stdout.split(' ')[2].split('.');
    const majorVersion = Number(v[0]);
    const minorVersion = Number(v[1]);
    
    // Ensure at least v1 or higher
    if (
      isNaN(majorVersion) || 
      majorVersion < 1 ||
      (majorVersion === 1 && minorVersion < 9)
    ) {
      return helper.fail(`
        Composer version 1.9 or higher is required.
      `);
    }
    
    helper.success(`
      Composer ${v.join('.')} has been confirmed - you are now able to access the
      <strong>cryo sleep</strong> area.
    `, [
      {
        name: 'COMPOSER_PATH',
        value: composerExecutionPath
      }
    ]);

  } catch (e) {
    helper.fail(`
      There was an error validating your PHP runtime. Please ensure that you
      can run it successfully and try again. Here's the error we got - sorry
      if the formatting is ugly: <br/><br/>
      ${e}
    `);
  }
};
