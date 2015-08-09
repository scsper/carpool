import ridesQueries from '../rides';
import organizationsQueries from '../organizations';
import usersQueries from '../users';
import eventsQueries from '../events';

describe('rides queries', function() {
    beforeEach(function(done) {
        let _this = this;

        Promise.all([
            organizationsQueries.create({name: 'test'}),
            usersQueries.create({name: 'test', address: 'random'})
        ]).then(function(results) {
            _this.organizationId = results[0].id;
            _this.userId = results[1].id;

            eventsQueries.create({organizationId: _this.organizationId}).then(event => {
                _this.event = event;

                done();
            }).catch(done);
        }).catch(done);
    });

    it('creates a ride for an event', function(done) {
        let params = {
            eventId: this.event.id,
            driverId: this.userId,
            seats: 4,
            departureTime: '2015-01-08 11:00',
            arrivalTime: '2015-01-08 08:00',
            notes: 'hello'
        };

        ridesQueries.create(params).then(ride => {
            expect(ride.id).to.be.a('number');
            done();
        }).catch(done);
    });
});
