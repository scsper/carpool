import EventRecord from './records/event';

class EventCollection {
    constructor() {
        // need to change events to an object and make eventList an array but that will come later
        this.events = [];

        /**
         * key: eventId
         * value: array of ride ids
         */
        this.eventsToRidesMap = {};
    }

    /**
     * Returns the list of all events.
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
};

export default EventCollection;
