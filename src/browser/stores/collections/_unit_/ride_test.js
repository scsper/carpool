import RideCollection from '../ride';

describe('stores/collections/ride', function() {
    beforeEach(function() {
        this.collection = new RideCollection();
    });

    describe('#get', function() {
        it('returns the ride that has the given ride id', function() {
            let id = 1;
            let ride = {
                dummy: 'ride'
            };

            this.collection.rides[id] = ride;

            expect(this.collection.get(id)).to.deep.equal(ride);
        });
    });

    describe('#addRides', function() {
        it('adds raw rides and converts them into ride records', function() {
            let rawRides = [{
                arrivaltime: "2015-01-08T16:00:00.000Z",
                departuretime: "2015-01-08T19:00:00.000Z",
                driverid: 1,
                eventid: 1,
                id: 1,
                notes: "ello moto",
                passengers: [],
                seats: 4
            }];

            this.collection.addRides(rawRides);

            expect(this.collection.rides[1].id).to.equal(1);
        });
    });

    describe('#addMemberIdsToRide', function() {
        it('adds all members to a ride when the member ids are strings', function() {
            let rideId = 1;
            let memberIds = ['1', '2'];

            this.collection.rides[rideId] = {
                passengers: []
            };

            this.collection.addMemberIdsToRide(rideId, memberIds);

            expect(this.collection.rides[rideId].passengers).to.deep.equal([1, 2]);
        });

        it('adds all members to a ride when the member ids are numbers', function() {
            let rideId = 1;
            let memberIds = [1, 2];

            this.collection.rides[rideId] = {
                passengers: []
            };

            this.collection.addMemberIdsToRide(rideId, memberIds);

            expect(this.collection.rides[rideId].passengers).to.deep.equal([1, 2]);
        });
    });

    describe('#removeMemberIdsFromRide', function() {
        it('removes all members from a ride', function() {
            let rideId = 1;
            let memberIds = [1, 2];

            this.collection.rides[rideId] = {
                passengers: [1, 2]
            };

            this.collection.removeMemberIdsFromRide(rideId, memberIds);

            expect(this.collection.rides[rideId].passengers).to.deep.equal([]);
        });

        it('throws an error if a member is not a passenger in a ride', function() {
            var _this = this;
            let rideId = 1;
            let memberIds = [1, 2, 3];

            this.collection.rides[rideId] = {
                passengers: [1, 2]
            };

            expect(function() {
                _this.collection.removeMemberIdsFromRide(rideId, memberIds);
            }).to.throw(/Tried to remove a member/);
        });
    });
});
