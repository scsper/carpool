var Fluxxor = require('fluxxor');
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
        this.rides = payload.rides;
    }
});

module.exports = RideStore;
