import Fluxxor from 'fluxxor';
import EventCollection from './collections/event';
import RideCollection from './collections/ride';

import EventConstants from '../constants/event';
import RideConstants from '../constants/ride.js';
import EventRecord from '../records/event';

var EventStore = Fluxxor.createStore({
    initialize(eventsData) {
        this.eventCollection = new EventCollection();
        this.rideCollection = new RideCollection();
        this.selectedEvent = null; // This should probably change to be ID-based, not object-based.

        this.eventCollection.addEvents(eventsData);

        this.bindActions(
            EventConstants.OPEN_EVENT, this._handleOpenEvent,
            EventConstants.GET_INITIAL_EVENTS, this._getInitialEvents,
            RideConstants.ADD_MEMBERS_TO_RIDE, this._addMembersToRide,
            RideConstants.REMOVE_MEMBERS_FROM_RIDE, this._removeMembersFromRide
        );
    },

    getRide(id) {
        return this.rides[id];
    },

    getRidesForEvent(eventId) {
        return this.eventCollection.getRidesForEvent(eventId);
    },

    _addMembersToRide(payload) {
        this.rideCollection.addMembersToRide(payload.rideId, payload.memberIds);
        this.emit('change');
    },

    _removeMembersFromRide(payload) {
        this.rideCollection.removeMembersFromRide(payload.rideId, payload.memberIds);
        this.emit('change');
    },

    _handleOpenEvent({event, rides}) {
        this.selectedEvent = event;
        this.rideCollection.addRides(rides);

        rides.forEach(ride => {
            this.eventCollection.addRideToEvent(event.id, ride);
        });

        this.emit('change');
    },

    /**
     * Returns a list of all events.
     */
    getEvents() {
        return this.eventCollection.get();
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

    _getInitialEvents(rawEvents) {
        this.eventCollection.addEvents(rawEvents);
    }
});

module.exports = EventStore;
