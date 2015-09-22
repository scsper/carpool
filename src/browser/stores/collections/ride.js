import RideRecord from '../../records/ride.js';
import EventConstants from '../../constants/event.js';
import RideConstants from '../../constants/ride.js';

class RideCollection {
    constructor() {
        // key: rideId
        // value: Ride Record
        this.rides = {};
    }

    /**
     * Returns the ride that has the given ride id.
     */
    get(id) {
        return this.rides[id];
    }

    addRides(rawRides) {
        for (let rideId in rawRides) {
            if (rawRides.hasOwnProperty(rideId)) {
                this.rides[rideId] = new RideRecord(rawRides[rideId]);
            }
        }
    }

    addMembersToRide(rideId, memberIds) {
        var ride = this.rides[rideId];

        memberIds.forEach(memberId => {
            let id = parseInt(memberId, 10);
            ride.passengers.push(id);
        });
    }

    removeMembersFromRide(rideId, memberId) {
        var ride = this.rides[rideId];

        memberIds.forEach(memberId => {
            let index = ride.passengers.indexOf(memberId);

            if (index > -1) {
                ride.passengers.splice(index, 1);
            }
        });
    }
}

export default RideCollection;
