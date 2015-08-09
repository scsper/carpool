import organizationsQueries from '../organizations';
import eventsQueries from '../events';

describe('event queries', () => {
    beforeEach(function(done) {
        let _this = this;

        organizationsQueries.create({name: 'test'}).then(({id}) => {
            _this.organizationId = id;

            eventsQueries.create({organizationId: id}).then(event => {
                _this.event = event;

                done();
            }).catch(done);
        }).catch(done);
    });

    it('creates an event for an organization', function(done) {
        let id = this.organizationId;

        eventsQueries.create({organizationId: id}).then(event => {
            expect(event.id).to.be.a('number');
            done();
        }).catch(done);
    });

    it('gets a list of events for an organization', function(done) {
        let id = this.organizationId;

        organizationsQueries.create({name: 'test2'}).then(({differentId}) => {
            Promise.all([
                eventsQueries.create({organizationId: id}),
                eventsQueries.create({organizationId: differentId})
            ]).then((results) => {
                eventsQueries.getEvents(id).then((events) => {
                    expect(events.length).to.equal(2);
                    expect(events[0].id).to.be.a('number');
                    expect(events[1].id).to.be.a('number');

                    done();
                }).catch(done);
            }).catch(done);
        }).catch(done);
    });

    it('gets an event', function(done) {
        let id = this.organizationId;

        eventsQueries.get(this.event.id).then(event => {
            expect(event.id).to.be.a('number');
            done();
        }).catch(done);
    });
});
