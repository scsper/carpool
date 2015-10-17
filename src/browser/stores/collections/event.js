import EventRecord from './records/event';
import remove from 'lodash/array/remove';

class EventCollection {
    constructor() {
        // need to change events to an object and make eventList an array but that will come later
        this.events = [];

        /**
         * key: eventId
         * value: array of ride ids
         */
        this.eventsToRidesMap = {};


        // key: eventId
        // value: array of members ids who still need rides
        this.membersWhoNeedRides = {};
    }

    /**
     * Returns the list of all events.
     *
     * @return {Array} A list of EventRecords.
     */
    get() {
        return this.events;
    }

    /**
     * Returns the ride ids for a given event id.
     *
     * @param {String} eventId The event id that we want the ride ids for
     * @return {Array} A list of ride ids.
     */
    getRideIdsForEvent(eventId) {
        return this.eventsToRidesMap[eventId];
    }

    /**
     * Add raw events, convert them into event records, and push them onto the events array.
     *
     * @param {Array} rawEvents A list of events returned from the backend to convert to EventRecords.
     */
    addEvents(rawEvents) {
        rawEvents.forEach(rawEvent => {
            this.events.push(new EventRecord(rawEvent));
            this.membersWhoNeedRides[rawEvent.id] = [];
        });
    }

    /**
     * Associate a ride id with the given event id.
     *
     * @param {String} rideId The ride id to add
     * @param {String} eventId The event id to associate the ride id with
     */
    addRideIdToEvent(rideId, eventId) {
        if (!this.eventsToRidesMap[eventId]) {
            this.eventsToRidesMap[eventId] = [];
        }

        this.eventsToRidesMap[eventId].push(rideId);
    }

    remove(eventId, memberIds) {
        remove(this.membersWhoNeedRides[eventId], memberId => {
            return ( this.membersWhoNeedRides[eventId].indexOf(memberId) !== -1);
        });
    }

    addMemberIdsToEvent(eventId, memberIds) {
        memberIds.forEach(memberId => {
            this.membersWhoNeedRides[eventId].push(memberId);
        });
    }

    getMembersWhoNeedRides(eventId) {
        return this.membersWhoNeedRides[eventId];
    }

};

export default EventCollection;
