require('babel/register');
require('es6-promise').polyfill();

var organizationsQueries = require('../src/server/queries/organizations');
var usersQueries = require('../src/server/queries/users');

Promise.all([
    organizationsQueries.create({name: 'C3 Silicon Valley', address: '299 Bassett Street, San Jose, CA'}),
    organizationsQueries.create({name: 'City Church Chicago', address: '777 North Green Street, Chicago, IL'}),
    usersQueries.create({name: 'Dmitrii Abramov', address: 'Some random house in San Jone'}),
    usersQueries.create({name: 'Scott Sperling', address: 'Some random house in Sunnyvale'})
]).then(function(results) {
    var org1id = results[0].id;
    var org2id = results[1].id;
    var user1id = results[2].id;
    var user2id = results[3].id;

    Promise.all([
        organizationsQueries.addMember(org1id, user1id),
        organizationsQueries.addMember(org1id, user2id)
    ]).then(function() {
        console.log('Successfully populated the database');
        process.exit(0);
    });
}).catch(function(err) {
    console.error('Error: ', err);
    process.exit(1);
});

