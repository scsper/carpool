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
            rideIds: [1, 2, 3],
            id: 1
        });
    });

    it('returns an event', function() {
        console.log(this.store.get());
        let events = this.store.get().events;


        expect(events.length).to.equal(1);
        expect(events[0].name).to.equal('College Group');
    });
});
