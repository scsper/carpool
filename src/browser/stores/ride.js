var Fluxxor = require('fluxxor');

var OrganizationStore = Fluxxor.createStore({
    initialize: function() {
        this.rides = require('../../../test/fixtures/rides.js');
    },

    get: function() {
        return {
            rides: this.rides
        };
    }
});

module.exports = OrganizationStore;
