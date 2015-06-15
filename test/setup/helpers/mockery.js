/**
 * Enable mockery before every test case and disable it after
 */
module.exports = function() {
    global.mockery = require('mockery');

    beforeEach(function() {
        mockery.enable({
            useCleanCache: true,
            warnOnUnregistered: false
        });
    });

    afterEach(function() {
        mockery.deregisterAll();
        mockery.disable();
    });
};
