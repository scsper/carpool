import Fluxxor from 'fluxxor';
import EventCollection from './collections/event';
import RideCollection from './collections/ride';
import MemberCollection from './collections/member';

import EventConstants from '../constants/event';
import RideConstants from '../constants/ride.js';

var EventStore = Fluxxor.createStore({
    initialize({events, members}) {
        this.eventCollection = new EventCollection();
        this.rideCollection = new RideCollection();
        this.memberCollection = new MemberCollection();
        this.selectedEvent = null; // This should probably change to be ID-based, not object-based.

        this.eventCollection.addEvents(events);
        this.memberCollection.setMembers(members);

        this.bindActions(
            EventConstants.OPEN_EVENT, this._handleOpenEvent,
            EventConstants.GET_INITIAL_EVENTS, this._getInitialEvents,
            RideConstants.ADD_MEMBERS_TO_RIDE, this._addMembersToRide,
            RideConstants.REMOVE_MEMBERS_FROM_RIDE, this._removeMembersFromRide
        );
    },

    getRide(id) {
        let ride = this.rideCollection.get(id);
        ride.driverName = this.memberCollection.get(ride.driverId).name;

        return ride;
    },

    getRidesForEvent(eventId) {
        let rideIds = this.eventCollection.getRidesForEvent(eventId);

        let rides = rideIds.map(rideId => {
            return this.getRide(rideId);
        });

        return rides;
    },

    _addMembersToRide(payload) {
        this.rideCollection.addMembersToRide(payload.rideId, payload.memberIds);
        this.memberCollection.remove(payload.eventId, payload.memberIds);
        this.emit('change');
    },

    _removeMembersFromRide(payload) {
        this.rideCollection.removeMembersFromRide(payload.rideId, payload.memberIds);
        this.memberCollection.addMembersToEvent(payload.eventId, payload.memberIds)
        this.emit('change');
    },

    _handleOpenEvent({event, rides, membersWhoNeedRides}) {
        this.selectedEvent = event;
        this.rideCollection.addRides(rides);
        this.memberCollection.insert(event.id, membersWhoNeedRides);

        rides.forEach(ride => {
            this.eventCollection.addRideToEvent(ride.id, event.id);
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

    getMembers() {
        return this.memberCollection.getAll();
    },

    getMembersWhoNeedRides(eventId) {
        return this.memberCollection.getMembersWhoNeedRides(eventId);
    },

    _getInitialEvents(rawEvents) {
        this.eventCollection.addEvents(rawEvents);
    }
});

module.exports = EventStore;
