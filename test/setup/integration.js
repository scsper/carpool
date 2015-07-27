require('babel/register');
const db = require('../../src/server/db');

global.expect = require('chai').expect;

// cleanup the database
const truncate = (done) => {
    Promise.all([
        db.query('delete from rides_passengers'),
        db.query('delete from rides'),
        db.query('delete from events'),
        db.query('delete from members'),
        db.query('delete from users'),
        db.query('delete from organizations')
    ]).then(() => { done() }, done);
};

// start every test from the clean db
beforeEach(truncate);
// make sure we don't leave trash after we run tests
after(truncate);
