/**
 * Setup chai as an assertion library
 * this function will export `expect` as a global variable
 */
module.exports = function() {
    var chai = require('chai'),
        sinonChai = require('sinon-chai');

    chai.use(sinonChai);
    global.expect = chai.expect;
};
