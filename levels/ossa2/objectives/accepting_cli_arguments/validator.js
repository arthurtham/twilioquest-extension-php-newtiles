String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

const execSync = require('child_process').execSync;
const phpValidationPath = process.cwd() + '/public/levels/oss_elephpant/validation';
var date = new Date();
var hashString = String(date.getDate()) + phpValidationPath;
var check = hashString.hashCode();

module.exports = async helper => {
  try {
  let { codeExecutionPath } = helper.validationFields;
  if (codeExecutionPath) {
    codeExecutionPath = codeExecutionPath.trim();
  } else {
    helper.fail(`
      Please, provide an execution path.
    `);
  }

    const phpExecutionPath = helper.env.TQ_PHP_PATH +
      ' ' +
      phpValidationPath +
      '/cryo_workbench_gate.php ';

    const executeCodeString = phpExecutionPath +
      check +
      ' \'' +
      helper.env.TQ_PHP_PATH +
      '\'' +
      ' \'' +
      codeExecutionPath +
      '\'';
    const validationString = execSync(executeCodeString, { encoding: 'utf-8' });

      if (validationString === 'success') {
        helper.success(
          `
          Handshake successful!
          <br/><br/>
          Arm gate deactivated.
        `,
        );
      } else {
        helper.fail(`
          ${validationString}
          <br/><br/>
          Please, double check your script and try again.
        `);
      }

  } catch (e) {
    helper.fail(`
      There was an error executing your code. Please ensure that you
      can run it successfully and try again. Here's the error we got - sorry
      if the formatting is ugly: <br/><br/>
      ${e}
    `);
  }
};
