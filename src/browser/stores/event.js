var Fluxxor = require('fluxxor');
var EventConstants = require('../constants/event.js');

var EventStore = Fluxxor.createStore({
    initialize: function() {
        this.events = require('../../../test/fixtures/events.js');
        this.selectedEvent = null;

        this.bindActions(
            EventConstants.SELECT_EVENT, this.selectEvent
        );
    },

    get: function() {
        return {
            events: this.events
        };
    },

    selectEvent: function(event) {
        this.selectedEvent = event;
        this.emit('change');
    },

    getSelectedEvent: function() {
        return this.selectedEvent;
    }
});

module.exports = EventStore;
