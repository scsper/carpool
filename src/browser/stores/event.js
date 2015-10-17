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

        this.bindActions(
            EventConstants.OPEN_EVENT, this._handleOpenEvent,
            RideConstants.ADD_MEMBERS_TO_RIDE, this._addMembersToRide,
            RideConstants.REMOVE_MEMBERS_FROM_RIDE, this._removeMembersFromRide
        );
    },

    /**
     * Returns a ride.
     *
     * @param {Number} id The id of the requested ride
     * @return {RideRecord} The requested ride.  The ride is augmented with the driver object, instead of the driver id.
     */
    getRide(id) {
        let ride = this.rideCollection.get(id);

        // TODO: we should change this to contain the entire driver, not just the name
        ride.driverName = this.memberCollection.get(ride.driverId).name;

        return ride;
    },

    /**
     * Gets a list of rides for the given event id.
     *
     * @param {Bumber} eventId The id of the requested event
     * @return {Array} A list of RideRecords
     */
    getRidesForEvent(eventId) {
        let rideIds = this.eventCollection.getRideIdsForEvent(eventId);

        let rides = rideIds.map(rideId => {
            return this.getRide(rideId);
        });

        return rides;
    },

    /**
     * Returns a list of all events.
     *
     * @return {Array} A list of EventRecords.
     */
    getEvents() {
        return this.eventCollection.get();
    },

    /**
     * Returns the selected event.
     *
     * @return {EventRecord} The selected event.
     */
    getSelectedEvent() {
        return this.selectedEvent;
    },

    /**
     * Returns a map of all the members.
     *
     * @return {Object} A map with the member id as key and the MemberRecord as value
     */
    getMembers() {
        return this.memberCollection.getAll();
    },

    /**
     * Returns a list of members who need rides for the given event.
     *
     * @param {Number} eventId The id of the event we want the list of members who need rides.
     * @return {Array} A list of MemberRecords who need rides
     */
    getMembersWhoNeedRides(eventId) {
        let memberList = this.eventCollection.getMembersWhoNeedRides(eventId).map( memberId => {
            return this.memberCollection.get(memberId);
        });

        return memberList;
    },

    /**
     * Adds raw events to the event collection.
     *
     * @param {Array} A list of raw events returned from the backend.
     */
    addEvents(rawEvents) {
        this.eventCollection.addEvents(rawEvents);
        this.emit('change');
    },

    /**
     * Adds raw members to the member collection.
     *
     * @param {Array} A list of raw members returned from the backend.
     */
    addMembers(rawMembers) {
        this.memberCollection.setMembers(rawMembers);
        this.emit('change');
    },

    /**
     * Adds members to a ride.
     *
     * @param {Number} rideId The ride that members will be added to.
     * @param {Array} memberIds The ids of members that will be added to the rides.
     * @param {Number} eventId The id of the event that the ride belongs to.
     *      This is needed because we want to keep track of what members need rides in an event.
     */
    _addMembersToRide({rideId, memberIds, eventId}) {
        this.rideCollection.addMemberIdsToRide(rideId, memberIds);
        this.eventCollection.remove(eventId, memberIds);

        this.emit('change');
    },

    /**
     * Removes members from a ride.
     *
     * @param {Number} rideId The ride that members will be removed from.
     * @param {Array} memberIds The ids of members that will be removed from the rides.
     * @param {Number} eventId The id of the event that the ride belongs to.
     *      This is needed because we want to keep track of what members need rides in an event.
     */
    _removeMembersFromRide({rideId, memberIds, eventId}) {
        this.rideCollection.removeMemberIdsFromRide(rideId, memberIds);
        this.eventCollection.addMemberIdsToEvent(eventId, memberIds);

        this.emit('change');
    },

    /**
     * Performs all the logic associated with opening an event.
     *
     * @param {Object} event A raw event returned from the backend.
     * @param {Array} rides A list of raw rides available for this event.
     * @param {Array} membersWhoNeedRides A list of raw members who need rides for this event.
     */
    _handleOpenEvent({event, rides, membersWhoNeedRides}) {
        // change this to ID-based
        let memberIds = membersWhoNeedRides.map( member => {
            return member.id;
        });

        this.selectedEvent = event;
        this.rideCollection.addRides(rides);
        this.eventCollection.addMemberIdsToEvent(event.id, memberIds);

        rides.forEach(ride => {
            this.eventCollection.addRideIdToEvent(ride.id, event.id);
        });

        this.emit('change');
    }
});

module.exports = EventStore;
