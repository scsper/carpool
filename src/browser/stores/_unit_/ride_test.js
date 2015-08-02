var RideStore = require('../ride.js');

describe('Ride Store', () => {
    beforeEach(function() {
        this.store = new RideStore();
        this.store.rides = require('../../../../test/fixtures/rides.js');
    });

    it('stores rides', function() {
        let payload = {
            rides: require('../../../../test/fixtures/rides.js')
        };

        this.store.rides = {};

        this.store._storeRides(payload);

        expect(this.store.rides[1].driver).to.equal('Scott Sperling');
        expect(this.store.rides[2].driver).to.equal('Dmitrii Abramov');
        expect(this.store.rides[3].driver).to.equal('Philemon Chan');
    });

    it('returns a ride', function() {
        let ride = this.store.getById(1);

        expect(ride.totalSpots).to.equal(7);
        expect(ride.id).to.equal(1);
    });

    it('adds members to rides', function() {
        let rideId = 2;
        let payload = {
            rideId: rideId,
            memberIds: [1, 2, 3]
        };

        expect(this.store.rides[rideId].passengers.length).to.equal(0);

        this.store._addMembersToRide(payload);

        expect(this.store.rides[rideId].passengers.length).to.equal(3);
        expect(this.store.rides[rideId].passengers).to.deep.equal([1, 2, 3]);
    });

    it('removes members from rides', function() {
        let rideId = 1;
        let payload = {
            rideId: rideId,
            memberIds: [4]
        };

        expect(this.store.rides[rideId].passengers.length).to.equal(1);

        this.store._removeMembersFromRide(payload);

        expect(this.store.rides[rideId].passengers.length).to.equal(0);
    });
});
