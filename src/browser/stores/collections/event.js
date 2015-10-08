import EventRecord from '../../records/event';

class EventCollection {
    constructor() {
        // need to change events to an object and make eventList an array but that will come later
        this.events = [];

        // key: eventId
        // value: array of ride ids
        this.eventsToRidesMap = {};
    }

    get() {
        return this.events;
    }

    /**
     * TODO: change this to getRideIdsForEvent
     */
    getRidesForEvent(id) {
        return this.eventsToRidesMap[id];
    }

    addEvents(rawEvents) {
        rawEvents.forEach(rawEvent => {
            this.events.push(new EventRecord(rawEvent));
        });
    }

    addRideToEvent(rideId, eventId) {
        if (!this.eventsToRidesMap[eventId]) {
            this.eventsToRidesMap[eventId] = [];
        }

        this.eventsToRidesMap[eventId].push(rideId);
    }
};

export default EventCollection;
