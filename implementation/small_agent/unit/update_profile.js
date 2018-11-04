const assert = require('assert');
const mockery = require('mockery');

describe('@update_profile unit tests', () => {
    describe('@update_profile test suite', () => {
        beforeEach(() => mockery.enable({
            "warnOnUnregistered": false,
            "warnOnReplace": false,
            "useCleanCache": true
        }));

        afterEach(() => {
            mockery.deregisterAll();
            mockery.disable();
        });

        it('it should update user profile', (done) => {

            let mock = function Datastore(options){
                this.save = function(request) {
                    console.log('mocked');
                    return new Promise((resolve, reject) => {
                        resolve();
                    });
                };
                this.key = function (arr) {
                    return arr[0];
                }
            };

            mockery.registerMock('@google-cloud/datastore', mock);
            const handler = require("../utils/update_profile");
            handler.update_profile("29eacf99-359c-4503-8b67-bc6a4e3e8d74", "I am just a mere bot that wants to get to know you better", [], (error, result) => {
                assert(!error);
                assert(result);
                done();
            });
        });

        it('it should return an error since it could not update the user profile', (done) => {

            let mock = function Datastore(options){
                this.save = function(request) {
                    console.log('mocked');
                    return new Promise((resolve, reject) => {
                        reject("Oops..");
                    });
                };
                this.key = function (arr) {
                    return arr[0];
                }
            };

            mockery.registerMock('@google-cloud/datastore', mock);
            const handler = require("../utils/update_profile");

            handler.update_profile("29eacf99-359c-4503-8b67-bc6a4e3e8d74", "I am just a mere bot that wants to get to know you better", [], (error, result) => {
                assert(error);
                done();
            });
        });
    });
});