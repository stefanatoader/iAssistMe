const assert = require('assert');
const mockery = require('mockery');


describe('@extract_categories unit tests', () => {
    describe('@extract_categories test suite', () => {
        beforeEach(() => mockery.enable({
            "warnOnUnregistered": false,
            "warnOnReplace": false,
            "useCleanCache": true
        }));

        afterEach(() => {
            mockery.deregisterAll();
            mockery.disable();
        });
        it('it should do nothing since query is too short', (done) => {
            let mock = {
                LanguageServiceClient: function (obj) {
                    console.log(obj);

                    this.classifyText = (request) => {
                        console.log('mocked');
                        return new Promise((resolve, reject) => {resolve([]);});
                    }

                }
            };
            mockery.registerMock('@google-cloud/language', mock);

            const handler = require("../utils/extract_categories");
            handler.extract_categories("Who are you?", "I am just a mere bot", (error, result) => {
                assert(!error);
                assert(result);
                done();
            });
        });

        it('it should return categories', (done) => {
            let mock = {
                LanguageServiceClient: function (obj) {
                    console.log(obj);

                    this.classifyText = (request) => {
                        console.log('mocked');
                        return new Promise((resolve, reject) => {resolve(["smalltalk"]);});
                    }

                }
            };

            mockery.registerMock('@google-cloud/language', mock);

            const handler = require("../utils/extract_categories");
            handler.extract_categories("Who are you?", "I am just a mere bot that wants to get to know you better bla bla bla", (error, result) => {
                assert(!error);
                assert(result);
                done();
            });
        });

        it('it should return an empty array', (done) => {

            let mock = {
                LanguageServiceClient: function (obj) {
                    console.log(obj);

                    this.classifyText = (request) => {
                        console.log('mocked');
                        return new Promise((resolve, reject) => {resolve([]);});
                    }

                }
            };

            mockery.registerMock('@google-cloud/language', mock);
            const handler = require("../utils/extract_categories");
            handler.extract_categories("Who are you?", "I am just a mere bot that wants to get to know you better bla bla bla", (error, result) => {
                assert(!error);
                assert(result);
                done();
            });
        });

        it('it should return an error since the natural language client threw an error', (done) => {

            let mock = {
                LanguageServiceClient: function (obj) {
                    console.log(obj);

                    this.classifyText = (request) => {
                        console.log('mocked');
                        return new Promise((resolve, reject) => {reject("Oops");});
                    }

                }
            };

            mockery.registerMock('@google-cloud/language', mock);
            const handler = require("../utils/extract_categories");

            handler.extract_categories("Who are you?", "I am just a mere bot that wants to get to know you better bla bla bla", (error, result) => {
                assert(error);
                assert(!result);
                done();
            });
        });
    });
});