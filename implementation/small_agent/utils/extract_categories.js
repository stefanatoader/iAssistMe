const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient({
    "projectId": "iassistme-backend-component",
    "credentials": require("./iAssistMe -84fa7d5f7abe")
});


exports.extract_categories = (command, cleverbot_response, cb) => {
    let query = command + " " + cleverbot_response;
    if(query.split(" ").length < 20){
        return cb(null, cleverbot_response, []);
    }
    const document = {
        content: query,
        type: 'PLAIN_TEXT',
    };
    client
        .classifyText({document: document})
        .then(results => {
            if(results){
                const classification = results[0];
                return cb(null, cleverbot_response, classification.categories);
            } else {
                return cb(null, cleverbot_response, []);
            }
        })
        .catch(err => {
            console.error(err);
            return cb({"status": 1, "data": "Error extracting categories"});
        });
};