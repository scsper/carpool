var Fluxxor = require('fluxxor');
var RideRecord = require('../records/ride.js');
var EventConstants = require('../constants/event.js');

var RideStore = Fluxxor.createStore({
    initialize() {
        this.rides = {};

        this.bindActions(
            EventConstants.OPEN_EVENT, this._storeRides
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

    _storeRides(payload) {
        for(let rideId in payload.rides) {
            if (payload.rides.hasOwnProperty(rideId)) {
                let rideData = payload.rides[rideId];

                this.rides[rideId] = new RideRecord(rideData);
            }
        }
    }
});

module.exports = RideStore;
