import organizationsQueries from '../organizations';
import eventsQueries from '../events';

describe('event queries', () => {
    it('creates an event for an organization', (done) => {
        organizationsQueries.create({name: 'test'}).then(({id}) => {
            eventsQueries.create({organizationId: id}).then((event) => {
                expect(event.id).to.be.a('number');
                done();
            }).catch(done);
        }).catch(done);
    });

    it('gets a list of events for an organization', function(done) {
        organizationsQueries.create({name: 'test'}).then(({id}) => {
            organizationsQueries.create({name: 'test2'}).then(({differentId}) => {
                eventsQueries.create({organizationId: id}).then((event) => {
                    eventsQueries.create({organizationId: id}).then((event) => {
                        eventsQueries.create({organizationId: differentId}).then((event) => {
                            eventsQueries.getEvents(id).then((events) => {
                                expect(events.length).to.equal(2);
                                expect(events[0].id).to.be.a('number');
                                expect(events[1].id).to.be.a('number');

                                done();
                            }).catch(done);
                        }).catch(done);
                    }).catch(done);
                }).catch(done);
            }).catch(done);
        }).catch(done);
    });

    it('gets an event', function(done) {
        organizationsQueries.create({name: 'test'}).then(({id}) => {
            eventsQueries.create({organizationId: id}).then((createdEvent) => {
                eventsQueries.get(createdEvent.id).then((event) => {
                    expect(event.id).to.be.a('number');
                    done();
                }).catch(done);
            }).catch(done);
        }).catch(done);
    });
});
