import organizationsQueries from '../organizations';
import eventsQueries from '../events';

describe('event queries', () => {
    it('creates an event for an organization', (done) => {
        organizationsQueries.create({name: 'test'}).then(({id}) => {
            eventsQueries.create({organizationId: id}).then((event) => {
                expect(event.id).to.be.a('number');
                done();
            }).catch(done);
        });
    });
});
