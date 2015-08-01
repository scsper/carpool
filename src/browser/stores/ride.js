var Fluxxor = require('fluxxor');
var RideRecord = require('../records/ride.js');
var EventConstants = require('../constants/event.js');
var RideConstants = require('../constants/ride.js');

var RideStore = Fluxxor.createStore({
    initialize() {
        this.rides = {};

        this.bindActions(
            EventConstants.OPEN_EVENT, this._storeRides,
            RideConstants.ADD_MEMBERS_TO_RIDE, this._addMembersToRide,
            RideConstants.REMOVE_MEMBERS_FROM_RIDE, this._removeMembersFromRide
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

    _removeMembersFromRide(payload) {
        let ride = this.rides[payload.rideId];

        payload.memberIds.forEach(memberId => {
            let index = ride.passengers.indexOf(memberId);

            if (index > -1) {
                ride.passengers.splice(index, 1);
            }
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
