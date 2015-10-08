require('babel/register');
require('es6-promise').polyfill();

var organizationsQueries = require('../src/server/queries/organizations');
var usersQueries = require('../src/server/queries/users');
var eventsQueries = require('../src/server/queries/events');
var ridesQueries = require('../src/server/queries/rides');
var ridesPassengersQueries = require('../src/server/queries/rides_passengers');

Promise.all([
    organizationsQueries.create({name: 'C3 Silicon Valley', address: '299 Bassett Street, San Jose, CA'}),
    organizationsQueries.create({name: 'City Church Chicago', address: '777 North Green Street, Chicago, IL'}),
    usersQueries.create({name: 'Dmitrii Abramov', address: 'Some random house in San Jone'}),
    usersQueries.create({name: 'Scott Sperling', address: 'Some random house in Sunnyvale'}),
    usersQueries.create({name: 'Jessica Sperling', address: 'Some random house in Sunnyvale'}),
    usersQueries.create({name: 'Philemon Chan', address: 'Some random house in Chicago'}),
    usersQueries.create({name: 'Benjamin Dang', address: 'Some random house in Los Angeles'}),
    usersQueries.create({name: 'Addison Luh', address: 'Some random house in Sunnyvale'}),
]).then(function(results) {
    var org1id = results[0].id;
    var org2id = results[1].id;
    var user1id = results[2].id;
    var user2id = results[3].id;
    var user3id = results[4].id;
    var user4id = results[5].id;
    var user5id = results[6].id;
    var user6id = results[7].id;

    Promise.all([
        organizationsQueries.addMember(org1id, user1id),
        organizationsQueries.addMember(org1id, user2id),
        organizationsQueries.addMember(org1id, user3id),
        organizationsQueries.addMember(org1id, user4id),
        organizationsQueries.addMember(org1id, user5id),
        organizationsQueries.addMember(org1id, user6id),

        eventsQueries.create({
            name: 'Youth Group',
            address: '299 Bassett Street, San Jose, CA',
            organizationId: org1id,
            date: '2015-01-08 09:00',
            description: 'A time to worship for our youth.'
        })
    ]).then(function(results) {
        var params = {
            eventId: results[6].id,
            driverId: user1id,
            seats: 4,
            departureTime: '2015-01-08 11:00',
            arrivalTime: '2015-01-08 08:00',
            notes: 'ello moto'
        };

        ridesQueries.create(params).then(function(results) {
            console.log(results);
            var rideId = results.id;
            console.log(rideId);

            Promise.all([
                ridesPassengersQueries.insert(user2id, rideId),
                ridesPassengersQueries.insert(user3id, rideId),
                ridesPassengersQueries.insert(user4id, rideId)
            ]).then(function() {
                console.log('Successfully populated the database');
                process.exit(0);
            }).catch(function(error) {
                console.error('Error:', error);
                process.exit(1);
            });
        });
    });
}).catch(function(err) {
    console.error('Error: ', err);
    process.exit(1);
});

