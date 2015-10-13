import EventService from '../events';
import request from 'superagent';

describe('browser/services/events.js', function() {
    beforeEach(function() {
        this.getStub = this.sandbox.stub(request, 'get').returns({
            end: this.endStub
        });
    });

    describe('#getRidesForEvent', function() {
        it('calls the correct url', function() {
            this.getStub.returns({
                end: function() {}
            });

            EventService.getRidesForEvent(1, 1);

            expect(this.getStub).to.be.calledWith('/api/organizations/1/events/1/rides');
        });

        it('resolves the promise with the response body', function(done) {
            this.endStub = function(cb) {
                cb(null, {
                    body: '123'
                });
            };

            this.getStub.returns({
                end: this.endStub
            });

            EventService.getRidesForEvent(1, 1).then(function(data) {
                expect(data).to.equal('123');
                done();
            });
        });

        it('rejects the promise with the error', function(done) {
            this.endStub = function(cb) {
                cb('error', null);
            };

            this.getStub.returns({
                end: this.endStub
            });

            EventService.getRidesForEvent(1, 1).catch(function(data) {
                expect(data).to.equal('error');
                done();
            });
        });
    });
});
