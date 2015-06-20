var Fluxxor = require('fluxxor');

var EventStore = Fluxxor.createStore({
    initialize: function() {
        this.events = require('../../../test/fixtures/events.js');
    },

    get: function() {
        return {
            events: this.events
        };
    }
});

module.exports = EventStore;
