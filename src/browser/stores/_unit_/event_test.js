var EventStore = require('../event.js');
var expect = require('chai').expect;

describe('Event Store', () => {
    beforeEach(function() {
        this.store = new EventStore();

        this.store.events.push({
            name: 'College Group',
            date: '7/14/2015',
            time: '7:00pm',
            description: 'Come worship with the college group.',
            id: 1
        });
    });

    it('returns an event', function() {
        let events = this.store.get();

        expect(events.length).to.equal(1);
        expect(events[0].name).to.equal('College Group');
    });

    it('selects an event', function() {
        let payload = {
            event: {
                name: 'test'
            }
        };

        this.store._selectEvent(payload);

        expect(this.store.selectedEvent.name).to.equal('test');
    });

    it('gets a selected event', function() {
        this.store.selectedEvent = {
            name: 'test'
        };

        expect(this.store.getSelectedEvent().name).to.equal('test');
    });

    it('initializes data', function() {
        let payload = {
            events: [{
                name: 'test',
                date: '7/14/2015',
                time: '7:00pm',
                description: 'Come worship with the college group.',
                id: 1
            }]
        };

        this.store._getInitialEvents(payload);

        expect(this.store.events[1].name).to.equal('test');
    });
});
