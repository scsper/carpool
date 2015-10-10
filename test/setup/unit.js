require("babel/register");
var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require("sinon-chai");

chai.use(sinonChai);

// TODO: setup
global.expect = require('chai').expect;

beforeEach(function() {
    this.sandbox = sinon.sandbox.create();
});

afterEach(function() {
    this.sandbox.restore();
});
