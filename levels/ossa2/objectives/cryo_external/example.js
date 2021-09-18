/*
In Node.js, environment variables are attached to the "process.env" object.
When we run the player's code for them, we insert any stored environment
variables into this object. We prefix them with "TQ_" to try and avoid
collisions with any preexisting envrionment variables.

Note that any sensitive values won't be displayed again in the UI anywhere, but
are available to the developer's code and your validation code.
*/

console.log(`Twilio Account SID: ${process.env.TQ_TWILIO_ACCOUNT_SID}`);
console.log('These are the ones that are set by this example:');
console.log(`Nonsensitive thing: ${process.env.TQ_TEST_VARIABLE}`);
console.log(`Secret thing: ${process.env.TQ_TEST_SECRET_VARIABLE}`);
