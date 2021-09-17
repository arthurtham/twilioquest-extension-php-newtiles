module.exports = helper => {
  /*
  First things first, we grab the new values for environment variables from the
  validation fields 
  */
  const { regularVariable, sensitiveVariable } = helper.validationFields;

  /*
  If environment variables have already been set by other validation code, they
  will be available on the "helper.env" object like so:
  */
  const { TQ_TEST_VARIABLE, TQ_TEST_SECRET_VARIABLE } = helper.env;

  // Log statements from validator code are sent to the web inspector console in
  // dev mode
  console.log(`Previous TQ_TEST_VARIABLE: ${TQ_TEST_VARIABLE}`);
  console.log(`Previous TQ_TEST_SECRET_VARIABLE: ${TQ_TEST_SECRET_VARIABLE}`);

  /*
  To set new environment variables, we will pass a second property along with
  our success response in addition to "message" - a "env" property. This will
  contain an array of environment variables that should be set in TwilioQuest
  settings.
  */
  helper.success(
    'New environment variables have been created! Check them out in the Settings menu.',
    [
      // Note that when SETTING the variables, you omit the TQ_ prefix
      { name: 'TEST_VARIABLE', value: regularVariable },
      // We use "concealed" to indicate this value should not be shown in the UI
      {
        name: 'TEST_SECRET_VARIABLE',
        value: sensitiveVariable,
        concealed: true,
      },
    ]
  );
};
