var Fluxxor = require('fluxxor');

var RideStore = Fluxxor.createStore({
    initialize: function() {
        this.rides = require('../../../test/fixtures/rides.js');
    },

    get: function() {
        return {
            rides: this.rides
        };
    },

    getById: function(id) {
        return this.rides[id];
    }
});

module.exports = RideStore;
