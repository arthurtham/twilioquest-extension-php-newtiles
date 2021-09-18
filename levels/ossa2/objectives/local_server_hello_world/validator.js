
// Generate today's code based on month/day
const today = new Date();
const TODAYS_CODE = String((today.getMonth() + today.getDate()) * 42);

module.exports = async helper => {
  let { scriptName } = helper.validationFields;
  if (scriptName) {
    scriptName = scriptName.trim();
  } else {
    scriptName = 'index.php';
  }

  try {
    const scriptUrl = `http://localhost:8000/${scriptName}`;
    const response = await fetch(scriptUrl);

    if (response.status === 404) {
      return helper.fail(`
        We couldn't find the script at the path you provided. We looked at:
        <br/><br/>
        ${scriptUrl}
        <br/><br/>
        If you open that URL in a browser, do you get a response? Ensure that
        you do before trying again.
      `);
    }

    if (response.status !== 200) {
      return helper.fail(`
        We didn't receive a successful response from your server. The status 
        code we got from your server was ${response.status}, and we were 
        expecting a "200" which indicates a successful request.
      `);
    }

    const responseText = await response.text();

    if (!responseText || responseText.trim() === '') {
      return helper.fail(`
        We got a response from your server, but it didn't contain any text. Open
        your server URL in a browser:
        <br/><br/>
        ${scriptUrl}
        <br/><br/>
        Does it contain the response you expect?
      `);
    }

    console.log(responseText);

    if (responseText.trim() !== TODAYS_CODE) {
      return helper.fail(`
        BZZZRRRRT! System Error. OSS Elephpant security code not found.
        Security code "${TODAYS_CODE}" expected.
      `);
    }

    helper.success(`
      Security code accepted! You may now proceed further aboard the OSS
      Elephpant.
    `);
  } catch (e) {
    console.log(e);

    if (e.message && e.message.trim().toLowerCase() === 'failed to fetch') {
      return helper.fail(`
        Is your server currently running? We couldn't send a request to
        http://localhost:8000/${scriptName}
      `);
    }

    helper.fail(`
      There was an error testing your PHP code. Please ensure that you
      can run it successfully in a web browser and try again. Here's the error 
      we got - sorry if the formatting is ugly: <br/><br/>
      ${e}
    `);
  }
};
