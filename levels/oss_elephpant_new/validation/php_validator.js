const path = require('path');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
const jetpack = require('fs-jetpack');

/**
 * Perform validation with PHP code - PHP code should exit with a non-zero
 * status code if validation fails.
 * 
 * @param {String} phpPath - Path to PHP executable
 * @param {String} validatorPath - Path to validation file in this folder to run
 * @param {Array} args - CLI args to provide to the PHP file during execution
 * 
 * @returns {Object} With the results of the code execution:
 * - {Boolean} success - true if validator process exited with code 0
 * - {String} message - output/feedback from the PHP process
 * 
 * Example:
 * const result = await validate(
 *   TQ_PHP_PATH, 
 *   'boolean_comparison.php', 
 *   ['/my/file.php']
 * );
 */
async function validate(phpPath, validatorPath, args = []) {
  try {
    const vPath = path.resolve(__dirname, validatorPath);

    // TODO: Validate that phpPath is indeed a PHP runtime?
    // PHP path exists?
    const phpExists = await jetpack.existsAsync(phpPath);
    if (!phpExists) {
      return {
        success: false,
        message: `
          Configured PHP runtime does not exist - check your TQ_PHP_PATH
          environment variable under Settings > Variables in the game's config
          UI.
        `
      };
    }

    // Validator exists?
    const validatorExists = await jetpack.existsAsync(vPath);
    if (!validatorExists) {
      return {
        success: false,
        message: `
          Developer Error: Specified PHP validation function does not exist.
        `
      };
    }

    // Execute PHP validator as child process
    args.unshift(vPath);
    const { stdout, stderr } = await execFile(phpPath, args);

    // Return results of test run
    if (stderr) {
      return { success: false, message: stderr };
    } else {
      return { success: true, message: stdout };
    }

  } catch(e) {
    // Catches all non-zero status code exits and returns stderr if available
    // or the exception message otherwise
    return {
      success: false,
      message: e.stderr || e.message
    };
  }
};

module.exports = validate;
