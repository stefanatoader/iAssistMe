const assert = require('assert');
const mockery = require("mockery");

describe('@call_cleverbot unit tests', () => {
    describe('@call_cleverbot test suite', () => {
        beforeEach(() => mockery.enable({
            "warnOnUnregistered": false,
            "warnOnReplace": false,
            "useCleanCache": true
        }));

        afterEach(() => {
            mockery.deregisterAll();
            mockery.disable();
        });

        it('it should respond since it\'s a known command', (done) => {

            let mock = {
                SessionsClient: function (obj) {
                    console.log(obj);

                    this.sessionPath = function (obj1, obj2) {return ""};


                    this.detectIntent = (request) => {
                        console.log('mocked');
                        return new Promise((resolve, reject) => {
                            resolve([
                                {
                                    "responseId": "b17b38ee-013c-4998-828f-d524417340c5",
                                    "queryResult": {
                                        "fulfillmentMessages": [
                                            {
                                                "platform": "PLATFORM_UNSPECIFIED",
                                                "text": {
                                                    "text": [
                                                        "Think of me as a virtual agent."
                                                    ]
                                                },
                                                "message": "text"
                                            }
                                        ],
                                        "outputContexts": [],
                                        "queryText": "Who are you?",
                                        "speechRecognitionConfidence": 0,
                                        "action": "smalltalk.agent.acquaintance",
                                        "parameters": {
                                            "fields": {}
                                        },
                                        "allRequiredParamsPresent": true,
                                        "fulfillmentText": "I'm a virtual being, not a real person.",
                                        "webhookSource": "",
                                        "webhookPayload": null,
                                        "intent": {
                                            "inputContextNames": [],
                                            "events": [],
                                            "trainingPhrases": [],
                                            "outputContexts": [],
                                            "parameters": [],
                                            "messages": [],
                                            "defaultResponsePlatforms": [],
                                            "followupIntentInfo": [],
                                            "name": "projects/iassistme-backend-component/agent/intents/1f77575d-de58-4917-a8b8-676413b18041",
                                            "displayName": "smalltalk.agent.acquaintance",
                                            "priority": 0,
                                            "isFallback": false,
                                            "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
                                            "action": "",
                                            "resetContexts": false,
                                            "rootFollowupIntentName": "",
                                            "parentFollowupIntentName": "",
                                            "mlDisabled": false
                                        },
                                        "intentDetectionConfidence": 1,
                                        "diagnosticInfo": null,
                                        "languageCode": "en-us"
                                    },
                                    "webhookStatus": null
                                },
                                null,
                                null
                            ]);
                        });
                    }

                }
            };

            mockery.registerMock('dialogflow', mock);

            const handler = require("../utils/call_cleverbot");
            handler.call_cleverbot("Who are you?", (error, result) => {
                assert(!error);
                assert(result);
                done();
            });

        });

        it('it should respond with standard answer since it\'s not a known command', (done) => {

            let mock = {
                SessionsClient: function (obj){
                    console.log(obj);
                    this.sessionPath = function (obj1, obj2) {return ""};

                    this.detectIntent = (request) => {
                        console.log('mocked');
                        return new Promise((resolve, reject) => {
                            resolve([
                                {
                                    "responseId": "b17b38ee-013c-4998-828f-d524417340c5",
                                    "queryResult": {
                                        "fulfillmentMessages": [
                                            {
                                                "platform": "PLATFORM_UNSPECIFIED",
                                                "text": {
                                                    "text": [
                                                        "Think of me as a virtual agent."
                                                    ]
                                                },
                                                "message": "text"
                                            }
                                        ],
                                        "outputContexts": [],
                                        "queryText": "Who are you?",
                                        "speechRecognitionConfidence": 0,
                                        "action": "smalltalk.agent.acquaintance",
                                        "parameters": {
                                            "fields": {}
                                        },
                                        "allRequiredParamsPresent": true,
                                        "fulfillmentText": "I'm a virtual being, not a real person.",
                                        "webhookSource": "",
                                        "webhookPayload": null,
                                        "intent": {
                                            "inputContextNames": [],
                                            "events": [],
                                            "trainingPhrases": [],
                                            "outputContexts": [],
                                            "parameters": [],
                                            "messages": [],
                                            "defaultResponsePlatforms": [],
                                            "followupIntentInfo": [],
                                            "name": "projects/iassistme-backend-component/agent/intents/1f77575d-de58-4917-a8b8-676413b18041",
                                            "displayName": "smalltalk.agent.acquaintance",
                                            "priority": 0,
                                            "isFallback": false,
                                            "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
                                            "action": "",
                                            "resetContexts": false,
                                            "rootFollowupIntentName": "",
                                            "parentFollowupIntentName": "",
                                            "mlDisabled": false
                                        },
                                        "intentDetectionConfidence": 1,
                                        "diagnosticInfo": null,
                                        "languageCode": "en-us"
                                    },
                                    "webhookStatus": null
                                },
                                null,
                                null
                            ]);
                        });
                    }

                }
            };

            mockery.registerMock('dialogflow', mock);
            const handler = require("../utils/call_cleverbot");
            handler.call_cleverbot("What kind of spaghetti do you know?", (error, result) => {
                assert(!error);
                assert(result);
                done();
            });

        });

        it('it should find an intent for the user\'s command', (done) => {

            let mock = {
                SessionsClient: function (obj) {
                    console.log(obj);
                    this.sessionPath = function (obj1, obj2) {return ""};

                    this.detectIntent = (request) => {
                        console.log('mocked');
                        return new Promise((resolve, reject) => {
                            resolve([
                                {
                                    "responseId": "b17b38ee-013c-4998-828f-d524417340c5",
                                    "queryResult": {
                                        "fulfillmentMessages": [
                                            {
                                                "platform": "PLATFORM_UNSPECIFIED",
                                                "text": {
                                                    "text": [
                                                        "Think of me as a virtual agent."
                                                    ]
                                                },
                                                "message": "text"
                                            }
                                        ],
                                        "outputContexts": [],
                                        "queryText": "Who are you?",
                                        "speechRecognitionConfidence": 0,
                                        "action": "smalltalk.agent.acquaintance",
                                        "parameters": {
                                            "fields": {}
                                        },
                                        "allRequiredParamsPresent": true,
                                        "fulfillmentText": "I'm a virtual being, not a real person.",
                                        "webhookSource": "",
                                        "webhookPayload": null,
                                        "intent": {
                                            "inputContextNames": [],
                                            "events": [],
                                            "trainingPhrases": [],
                                            "outputContexts": [],
                                            "parameters": [],
                                            "messages": [],
                                            "defaultResponsePlatforms": [],
                                            "followupIntentInfo": [],
                                            "name": "projects/iassistme-backend-component/agent/intents/1f77575d-de58-4917-a8b8-676413b18041",
                                            "displayName": "smalltalk.agent.acquaintance",
                                            "priority": 0,
                                            "isFallback": false,
                                            "webhookState": "WEBHOOK_STATE_UNSPECIFIED",
                                            "action": "",
                                            "resetContexts": false,
                                            "rootFollowupIntentName": "",
                                            "parentFollowupIntentName": "",
                                            "mlDisabled": false
                                        },
                                        "intentDetectionConfidence": 1,
                                        "diagnosticInfo": null,
                                        "languageCode": "en-us"
                                    },
                                    "webhookStatus": null
                                },
                                null,
                                null
                            ]);
                        });
                    }

                }
            };

            mockery.registerMock('dialogflow', mock);
            const handler = require("../utils/call_cleverbot");
            handler.call_cleverbot("Who are you?", (error, result) => {
                assert(!error);
                assert(result);
                done();
            });

        });

        it('it should return an error since the agent threw an error', (done) => {

            let mock = {
                SessionsClient: function (obj) {
                    console.log(obj);
                    this.sessionPath = function (obj1, obj2) {return ""};

                    this.detectIntent = (request) => {
                        console.log('mocked');
                        return new Promise((resolve, reject) => {
                            reject("Oops");
                        });
                    }
                }
            };


            mockery.registerMock('dialogflow', mock);

            const handler = require("../utils/call_cleverbot");
            handler.call_cleverbot("Who are you?", (error, result) => {
                assert(error);
                assert(!result);
                done();
            });

        });
    });
});