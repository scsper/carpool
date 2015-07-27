var Fluxxor = require('fluxxor');
var RideRecord = require('../records/ride.js');
var EventConstants = require('../constants/event.js');

var RideStore = Fluxxor.createStore({
    initialize() {
        this.rides = [];

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
        payload.rides.forEach(ride => {
            this.rides.push(new RideRecord(rideData));
        });
    }
});

module.exports = RideStore;
