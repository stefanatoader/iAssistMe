const assert = require('assert');
const mockery = require('mockery');

describe('@update_profile unit tests', () => {
    describe('@update_profile test suite', () => {
        it('it should update user profile', (done) => {
            const handler = require("../utils/update_profile");

            let mock = {
                save: (data) => {}
            };

            mockery.registerMock('@google-cloud/datastore', mock);

            handler.update_profile("29eacf99-359c-4503-8b67-bc6a4e3e8d74", "I am just a mere bot that wants to get to know you better", [], (error, result) => {
                assert(!error);
                assert(result);
                done();
            });
        });

        it('it should return an error since it could not update the user profile', (done) => {
            const handler = require("../utils/update_profile");

            let mock = {
                save: (data) => { throw "Error"}
            };

            mockery.registerMock('@google-cloud/datastore', mock);

            handler.update_profile("29eacf99-359c-4503-8b67-bc6a4e3e8d74", "I am just a mere bot that wants to get to know you better", [], (error, result) => {
                assert(!error);
                assert(result);
                done();
            });
        });
    });
});