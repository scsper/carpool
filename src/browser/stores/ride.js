var Fluxxor = require('fluxxor');
var RideRecord = require('../records/ride.js');
var EventConstants = require('../constants/event.js');
var RideConstants = require('../constants/ride.js');

var RideStore = Fluxxor.createStore({
    initialize() {
        this.rides = {};

        this.bindActions(
            EventConstants.OPEN_EVENT, this._storeRides,
            RideConstants.ADD_MEMBERS_TO_RIDE, this._addMembersToRide
        );
    },

    get() {
        return {
            rides: this.rides
        };
    },

    getById(id) {
        return this.rides[id];
    },

    _addMembersToRide(payload) {
        let ride = this.rides[payload.rideId];

        payload.memberIds.forEach(memberId => {
            let id = parseInt(memberId, 10);

            ride.passengers.push(id);
        });

        this.emit('change');
    },

    _storeRides(payload) {
        for (let rideId in payload.rides) {
            if (payload.rides.hasOwnProperty(rideId)) {
                let rideData = payload.rides[rideId];

                this.rides[rideId] = new RideRecord(rideData);
            }
        }
    }
});

module.exports = RideStore;
