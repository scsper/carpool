/**
 * Initialize sinon.sandbox before every test case and clean it up after
 */
module.exports = function() {
    var sinon = require('sinon');

    beforeEach(function() {
        this.sandbox = sinon.sandbox.create();
    });

    afterEach(function() {
        this.sandbox.restore();
    });
};
