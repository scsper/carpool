import routes from '../routes';
import organizationsQueries from '../queries/organizations';
import ridesQueries from '../queries/rides';
import eventsQueries from '../queries/events';
import ridesPassengerQueries from '../queries/rides_passengers';

describe('server/routes.js', function() {
    beforeEach(function() {
        this.nextStub = this.sandbox.stub();
        this.jsonStub = this.sandbox.stub();
        this.renderStub = this.sandbox.stub();

        this.resStub = {
            json: this.jsonStub,
            render: this.renderStub
        };
    });

    describe('#getRide', function() {
        it('gets the rides from the database', function(done) {
            let dbStub = this.sandbox.stub(ridesQueries, 'get').returns(Promise.resolve('ride'));

            routes.getRide({params: {id: 'id'}}, this.resStub, this.nextStub).then(() => {
                expect(this.jsonStub).to.be.calledWith('ride');
                expect(dbStub).to.be.calledWith('id');

                done();
            });
        });

        it('calls next with an error if the database call fails', function(done) {
            this.sandbox.stub(ridesQueries, 'get').returns(Promise.reject('error'));

            // the promise is already caught in the code, so this call will resolve to .then
            routes.getRide({params: {id: 'id'}}, this.resStub, this.nextStub).then(() => {
                expect(this.nextStub).to.be.calledWith('error');

                done();
            });
        });
    });

    describe('#getEvents', function() {
        it('gets events from the database', function(done) {
            let dbStub = this.sandbox.stub(eventsQueries, 'getEvents').returns(Promise.resolve('events'));

            routes.getEvents({params: {organizationId: 'id'}}, this.resStub, this.nextStub).then(() => {
                expect(this.jsonStub).to.be.calledWith('events');
                expect(dbStub).to.be.calledWith('id');

                done();
            });
        });

        it('calls next with an error if the database call fails', function(done) {
            this.sandbox.stub(eventsQueries, 'getEvents').returns(Promise.reject('error'));

            // the promise is already caught in the code, so this call will resolve to .then
            routes.getEvents({params: {organizationId: 'id'}}, this.resStub, this.nextStub).then(() => {
                expect(this.nextStub).to.be.calledWith('error');
                done();
            });
        });
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
        beforeEach(function() {
            this.mockOrganizations = [{
                id: 1
            }];

            this.orgIndexDbStub = this.sandbox.stub(organizationsQueries, 'index').returns(Promise.resolve(
                this.mockOrganizations
            ));

            this.orgMembersDbStub = this.sandbox.stub(organizationsQueries, 'members').returns(Promise.resolve(
                'members'
            ));

            this.eventsDbStub = this.sandbox.stub(eventsQueries, 'getEvents').returns(Promise.resolve('events'));
        });

        it('gets the organization, members, and events and renders the `index` page', function(done) {
            routes.launch({}, this.resStub, this.nextStub).then(() => {
                expect(this.renderStub).to.be.calledWith('index', {
                    organizations: this.mockOrganizations,
                    events: 'events',
                    members: 'members'
                });

                done();
            });
        });

        it('calls next with an error if getting the organization fails', function() {
            this.orgIndexDbStub.returns(Promise.reject('error'));

            routes.launch({}, this.resStub, this.nextStub).then(() => {
                expect(this.nextStub).to.be.calledWith('error');
                expect(this.orgMembersDbStub).to.not.be.called;
                expect(this.eventsDbStub).to.not.be.called;

                done();
            });
        });

        it('calls next with an error if getting the organization members failed', function() {
            this.orgMembersDbStub.returns(Promise.reject('error'));

            routes.launch({}, this.resStub, this.nextStub).then(() => {
                expect(this.nextStub).to.be.calledWith('error');
                expect(this.orgIndexDbStub).to.be.called;
                expect(this.eventsDbStub).to.be.called;

                done();
            });
        });

        it('calls next with an error if getting the organization events failed', function() {
            this.eventsDbStub.returns(Promise.reject('error'));

            routes.launch({}, this.resStub, this.nextStub).then(() => {
                expect(this.nextStub).to.be.calledWith('error');
                expect(this.orgIndexDbStub).to.be.called;
                expect(this.orgMembersDbStub).to.be.called;

                done();
            });
        });
    });
});
