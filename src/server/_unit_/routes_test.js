import routes from '../routes';
import organizationsQueries from '../queries/organizations';
import ridesQueries from '../queries/rides';
import eventsQueries from '../queries/events';
import ridesPassengerQueries from '../queries/rides_passengers';

describe('server/routes.js', function() {
    beforeEach(function() {
        this.nextStub = this.sandbox.stub();
        this.jsonStub = this.sandbox.stub();
        this.resStub = {
            json: this.jsonStub
        };
    });

    describe('#getRide', function() {

    });

    describe('#getRides', function() {

    });

    describe('#getEvents', function() {

    });

    describe('#getOrganizations', function() {
        it('gets organizations from the database', function(done) {
            this.sandbox.stub(organizationsQueries, 'index').returns(Promise.resolve('organizations'));

            routes.getOrganizations({}, this.resStub, this.nextStub).then(() => {
                expect(this.jsonStub).to.be.calledWith('organizations');
                done();
            });
        });

        it('calls next with an error if the database call fails', function(done) {
            this.sandbox.stub(organizationsQueries, 'index').returns(Promise.reject('error'));

            // the promise is already caught in the code, so this call will resolve to .then
            routes.getOrganizations({}, this.resStub, this.nextStub).then(() => {
                expect(this.nextStub).to.be.calledWith('error');
                done();
            });
        });
    });

    describe('#getMembers', function() {
        it('gets members from the database', function(done) {
            var dbStub = this.sandbox.stub(organizationsQueries, 'members').returns(Promise.resolve('users'));

            routes.getMembers({params: {id: 'id'}}, this.resStub, this.nextStub).then(() => {
                expect(dbStub).to.be.calledWith('id');
                expect(this.jsonStub).to.be.calledWith('users');

                done();
            });
        });

        it('calls next with an error if the database call fails', function(done) {
            this.sandbox.stub(organizationsQueries, 'members').returns(Promise.reject('error'));

            // the promise is already caught in the code, so this call will resolve to .then
            routes.getMembers({params: {id: 'id'}}, this.resStub, this.nextStub).then(() => {
                expect(this.nextStub).to.be.calledWith('error');
                done();
            });
        });
    });

    describe('#launch', function() {

    });
});
