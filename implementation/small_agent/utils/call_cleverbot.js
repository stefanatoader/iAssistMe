// You can find your project ID in your Dialogflow agent settings
const projectId = 'iassistme-backend-component'; //https://dialogflow.com/docs/agents#settings
const sessionId = 'bot-session-id';

// Instantiate a DialogFlow client.
const dialogflow = require('dialogflow');
const sessionClient = new dialogflow.SessionsClient({
    "projectId": "iassistme-backend-component",
    "credentials": require("./iAssistMe -84fa7d5f7abe")
});

// Define session path
const sessionPath = sessionClient.sessionPath(projectId, sessionId);



exports.call_cleverbot = (command, callback) => {
// Send request and log result
    const languageCode = 'en-US';
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: command,
                languageCode: languageCode,
            },
        },
    };

    sessionClient
        .detectIntent(request)
        .then(responses => {
            const result = responses[0].queryResult;
            console.log(`  Query: ${result.queryText}`);
            console.log(`  Response: ${result.fulfillmentText}`);
            if (result.intent) {
                console.log(`  Intent: ${result.intent.displayName}`);
            }
            if(result.fulfillmentText){
                return callback(null, result.fulfillmentText);
            }
            return callback(null, "I don't really know how to answer that. Promise I'll improve.")
        })
        .catch(err => {
            console.error('ERROR:', err);
            return callback({"status": 1, "message": "Agent error."});
        });

};



