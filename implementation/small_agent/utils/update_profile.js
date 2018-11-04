const Datastore = require('@google-cloud/datastore');

//de inlocuit cu obiectul de credentiale la deploy
const datastore = new Datastore({
    projectId: "iassistme-backend-component",
    credentials: require("./iAssistMe -84fa7d5f7abe")
});

exports.update_profile = (user_id, cleverbot_response, categories, cb) => {
    const kind = 'UserProfile';
    const preferenceKey = datastore.key([kind, user_id]);

    const pref_data = {
        key: preferenceKey,
        data: categories
    };

    datastore
        .save(pref_data)
        .then(() => {
            cb(null, cleverbot_response);
        })
        .catch(err => {
            console.error(err);
            cb({"status": 1, "data": "Profile update fail"})
        });
};