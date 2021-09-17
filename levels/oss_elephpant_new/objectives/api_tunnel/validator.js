const execSync = require('child_process').execSync;
const validationExecutionPath = process.cwd() + '/public/levels/oss_elephpant/validation';
const executeCodeString = validationExecutionPath + '/cryo_workbench.php';

module.exports = (helper, callback) => {
  try {
    const phpExecutionPath = helper.env.TQ_PHP_PATH;
    let { scriptPath } = helper.validationFields;
    let url = 'https://dog.ceo/api/breeds/image/random';
    let commandString = phpExecutionPath + ' ' + executeCodeString + ' ' + phpExecutionPath + ' ' + scriptPath + ' ' + url;
    const validationString = execSync(commandString, { encoding: 'utf-8' });

    if (validationString === 'success') {
      helper.success(
        `
        Success! The workbench has been able to get whatever it needed from that external API and now seems to be functioning properly.
      `,
      );
    } else {
      helper.fail(`
        Unable to validate: ${validationString}. Please, double check installation and try again.
      `);
    }
  } catch (e) {
    helper.fail(`
      There was an error validating the Guzzle dependency. Please ensure that your composer.json looks as you expect and the Guzzle dependency has been installed. Here's the error we got - sorry
      if the formatting is ugly: <br/><br/>
      ${e}
    `);
  }
};
