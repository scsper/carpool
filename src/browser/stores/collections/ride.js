import RideRecord from './records/ride.js';
import EventConstants from '../../constants/event.js';
import RideConstants from '../../constants/ride.js';

class RideCollection {
    constructor() {
        /**
         * key: rideId
         * value: RideRecord
         */
        this.rides = {};
    }

    /**
     * Returns the ride that has the given ride id.
     */
    get(id) {
        return this.rides[id];
    }

    /**
     * Add raw rides, convert them into ride records, and add them to the rides map.
     *
     * @param {Array} rawRides A list of rides returned from the backend to convert to RideRecords.
     */
    addRides(rawRides) {
        Object.keys(rawRides).forEach(key => {
            let rawRide = rawRides[key];
            this.rides[rawRide.id] = new RideRecord(rawRide);
        });
    }

    /**
     * Adds members to the passengers array of a ride.
     *
     * @param {String} rideId The id of the ride that will receive the passengers.
     * @param {String} membersIds The ids of the members that will be added as passengers.
     */
    addMembersToRide(rideId, memberIds) {
        var ride = this.rides[rideId];

        memberIds.forEach(memberId => {
            let id = parseInt(memberId, 10);
            ride.passengers.push(id);
        });
    }

    /**
     * Removes members from the passengers array of a ride.
     * Throws an error if any member id does not exist in the passengers array,
     * because we should never enter that flow.
     *
     * @param {String} rideId The id of the ride that will lose the passengers.
     * @param {String} membersIds The ids of the members that will be removed as passengers.
     */
    removeMembersFromRide(rideId, memberIds) {
        var ride = this.rides[rideId];

        memberIds.forEach(memberId => {
            let index = ride.passengers.indexOf(memberId);

            if (index > -1) {
                ride.passengers.splice(index, 1);
            } else {
                // we should not ever enter this flow.
                throw new Error('Tried to remove a member that did not belong to a ride.');
            }
        });
    }
}

export default RideCollection;
