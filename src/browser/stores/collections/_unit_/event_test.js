import EventCollection from '../event';

describe('stores/collections/event', function() {
    beforeEach(function() {
        this.collection = new EventCollection();
    });

    describe('#get', function() {
        it('returns the list of events', function() {
            let events = [{
                id: 1
            }];

            this.collection.events = events;

            expect(this.collection.get()).to.deep.equal(events);
        });
    });

    describe('#getRidesForEvent', function() {
        it('returns the ride ids for a given event id', function() {
            let eventId = 1;
            let rideIds = [1, 2, 3];

            this.collection.eventsToRidesMap[eventId] = rideIds;
            expect(this.collection.getRidesForEvent(eventId)).to.deep.equal(rideIds);
        });
    });

    describe('#addEvents', function() {
        it('adds raw events and converts them into event records', function() {
            let rawEvents = [{
                address: '299 Bassett Street, San Jose, CA',
                date: '2015-01-08T17:00:00.000Z',
                description: 'A time to worship for our youth.',
                id: 1,
                name: 'Youth Group',
                organizationid: 1
            }];

            this.collection.addEvents(rawEvents);

            expect(this.collection.events[0].id).to.equal(1);
        });

        it('pushes entries onto the existing array', function() {
            let rawEvents = [{
                address: '299 Bassett Street, San Jose, CA',
                date: '2015-01-08T17:00:00.000Z',
                description: 'A time to worship for our youth.',
                id: 1,
                name: 'Youth Group',
                organizationid: 1
            }];

            this.collection.addEvents(rawEvents);

            rawEvents[0].id = 2;

            this.collection.addEvents(rawEvents);

            expect(this.collection.events[0].id).to.equal(1);
            expect(this.collection.events[1].id).to.equal(2);
        });
    });

    describe('#addRideToEvent', function() {
        it('associates a ride id with the given event id', function() {
            let rideId = 4;
            let eventId = 1;
            this.collection.eventsToRidesMap[eventId] = [1, 2, 3];

            this.collection.addRideToEvent(rideId, eventId);

            expect(this.collection.eventsToRidesMap[eventId]).to.deep.equal([1, 2, 3, 4]);
        });

        it('associates a ride id with the given event id when the event id does not exist yet', function() {
            let rideId = 1;
            let eventId = 1;

            this.collection.addRideToEvent(rideId, eventId);

            expect(this.collection.eventsToRidesMap[eventId]).to.deep.equal([1]);
        });
    });
});
