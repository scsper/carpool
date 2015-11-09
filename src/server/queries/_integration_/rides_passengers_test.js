import ridesPassengersQueries from '../rides_passengers.js';
import organizationsQueries from '../organizations';
import usersQueries from '../users';
import eventsQueries from '../events';
import ridesQueries from '../rides';
describe('./server/queries/rides_passengers.js', function() {
    beforeEach(function(done) {
        let _this = this;

        Promise.all([
            organizationsQueries.create({name: 'test'}),
            usersQueries.create({name: 'test', address: 'random'})
        ]).then(function(results) {
            _this.organizationId = results[0].id;
            _this.userId = results[1].id;

            eventsQueries.create({organizationId: _this.organizationId}).then(event => {
                let params = {
                    eventId: event.id,
                    driverId: _this.userId,
                    seats: 4,
                    departureTime: '2015-01-08 11:00',
                    arrivalTime: '2015-01-08 08:00',
                    notes: 'hello'
                };

                _this.event = event;

                ridesQueries.create(params).then(ride => {
                    _this.rideId = ride.id;

                    done();
                }).catch(done);
            }).catch(done);
        }).catch(done);
    });

    describe('#insert', function() {
        it('inserts a passenger into a ride', function(done) {
            ridesPassengersQueries.insert(this.userId, this.rideId).then(result => {
                expect(result.id).to.be.a('number');

                done();
            }).catch(done);
        });
    });

    describe('#getPassengers', function() {
        it('gets the passengers for a given ride', function(done) {
            ridesPassengersQueries.insert(this.userId, this.rideId).then(result => {
                ridesPassengersQueries.getPassengers(this.rideId).then(rows => {
                    expect(rows[0].userid).to.equal(this.userId);
                    done();
                })
            }).catch(done);
        });
    });

    describe('#remove', function() {
        it('removes a passenger from a ride', function(done) {
            ridesPassengersQueries.insert(this.userId, this.rideId).then(result => {
                ridesPassengersQueries.remove(this.userId, this.rideId).then(result => {
                    ridesPassengersQueries.getPassengers(this.rideId).then(rows => {
                        expect(rows.length).to.equal(0);
                    }).then(done, done);
                }).catch(done);
            }).catch(done);
        });
    });
});
