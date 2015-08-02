var Fluxxor = require('fluxxor');
var EventConstants = require('../constants/event.js');

import EventRecord from '../records/event.js';

var EventStore = Fluxxor.createStore({
    initialize() {
        this.events = [];
        this.selectedEvent = null;

        this.bindActions(
            EventConstants.OPEN_EVENT, this._selectEvent,
            EventConstants.GET_INITIAL_EVENTS, this._getInitialEvents
        );
    },

    /**
     * Returns a list of all events.
     */
    get() {
        return this.events;
    },

    /**
     * This should probably change to be ID-based, not object-based.
     */
    _selectEvent(payload) {
        this.selectedEvent = payload.event;
        this.emit('change');
    },

    getSelectedEvent() {
        return this.selectedEvent;
    },

    /**
     * Receives a list of events from the backend
     */
    _getInitialEvents(payload) {
        payload.events.forEach(eventData => {
            this.events.push(new EventRecord(eventData));
        }, this);
    }
});

module.exports = EventStore;
