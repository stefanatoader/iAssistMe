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
            const handler = require("../utils/extract_categories");

            let mock = {
                LanguageServiceClient : (obj) => {
                    return {
                        _innerApiCalls:{
                            classifyText: (request) => {
                                return [];
                            }
                        }
                    }
                }
            };

            mockery.registerMock('@google-cloud/language', mock);

            handler.extract_categories("Who are you?", "I am just a mere bot", (error, result) => {
                assert(!error);
                assert(result);
                done();
            });
        });

        it('it should return categories', (done) => {
            const handler = require("../utils/extract_categories");

            let mock = {
                LanguageServiceClient : (obj) => {
                    return {
                        classifyText: (request) => {
                            return ["smalltalk"];
                        }
                    }
                }
            };

            mockery.registerMock('@google-cloud/language', mock);

            handler.extract_categories("Who are you?", "I am just a mere bot that wants to get to know you better", (error, result) => {
                assert(!error);
                assert(result);
                done();
            });
        });

        it('it should return an empty array', (done) => {
            const handler = require("../utils/extract_categories");

            let mock = {
                LanguageServiceClient : (obj) => {
                    return {
                        classifyText: (request) => {
                            return [];
                        }
                    }
                }
            };

            mockery.registerMock('@google-cloud/language', mock);

            handler.extract_categories("Who are you?", "I am just a mere bot that wants to get to know you better", (error, result) => {
                assert(!error);
                assert(result);
                done();
            });
        });

        it('it should return an error since the natural language client threw an error', (done) => {
            const handler = require("../utils/extract_categories");

            let mock = {
                LanguageServiceClient : (obj) => {
                    return {
                        classifyText: (request) => {
                            throw "Error";
                        }
                    }
                }
            };

            mockery.registerMock('@google-cloud/language', mock);

            handler.extract_categories("Who are you?", "I am just a mere bot that wants to get to know you better", (error, result) => {
                assert(!error);
                assert(result);
                done();
            });
        });
    });
});