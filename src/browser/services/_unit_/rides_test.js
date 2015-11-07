import RideService from '../rides';
import request from 'superagent';

describe('browser/services/rides.js', function() {
    beforeEach(function() {
        this.endStub = this.sandbox.stub();

        this.setStub = this.sandbox.stub().returns({
            end: this.endStub
        });

        this.sendStub = this.sandbox.stub().returns({
            set: this.setStub
        });

        this.postStub = this.sandbox.stub(request, 'post').returns({
            send: this.sendStub
        });
    });

    describe('#addPassengersToRide', function() {
        it('makes the call correctly', function() {
            let organizationId = 1;
            let eventId = 1;
            let rideId = 1;
            let memberIds = [1];

            let expectedUrl = `/api/organizations/${organizationId}/events/${eventId}/rides/${rideId}`;

            RideService.addPassengersToRide(organizationId, memberIds, eventId, rideId);

            expect(this.postStub).to.have.been.calledWith(expectedUrl);
            expect(this.sendStub).to.have.been.calledWith({memberIds});
            expect(this.setStub).to.have.been.calledWith('Accept', 'application/json');
        });

        it('resolves the promise with the response body', function(done) {
            this.endStub = function(cb) {
                cb(null, {
                    body: '123'
                });
            };

            this.setStub.returns({
                end: this.endStub
            });

            RideService.addPassengersToRide().then(function(data) {
                expect(data).to.equal('123');
            }).then(done, done);
        });

        it('rejects the promise with the error', function(done) {
            this.endStub = function(cb) {
                cb('error', null);
            };

            this.setStub.returns({
                end: this.endStub
            });

            RideService.addPassengersToRide().catch(function(data) {
                expect(data).to.equal('error');
            }).then(done, done);
        });
    });
});
