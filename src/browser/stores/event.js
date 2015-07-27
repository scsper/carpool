var Fluxxor = require('fluxxor');
var EventConstants = require('../constants/event.js');

import EventRecord from '../records/event.js';

var EventStore = Fluxxor.createStore({
    initialize() {
        this.events = [];
        this.selectedEvent = null;

        this.bindActions(
            EventConstants.OPEN_EVENT, this.selectEvent,
            EventConstants.GET_INITIAL_EVENTS, this._getInitialEvents
        );
    },

    get() {
        return {
            events: this.events
        };
    },

    selectEvent(payload) {
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
