import OrganizationService from '../organizations';
import request from 'superagent';

describe('browser/services/organizations.js', function() {
    beforeEach(function() {
        this.getStub = this.sandbox.stub(request, 'get').returns({
            end: this.endStub
        });
    });

    describe('#getOrganizations', function() {
        it('calls the correct url', function() {
            this.getStub.returns({
                end: function() {}
            });

            OrganizationService.getOrganizations();

            expect(this.getStub).to.be.calledWith('/api/organizations');
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

            OrganizationService.getOrganizations().then(function(data) {
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

            OrganizationService.getOrganizations().catch(function(data) {
                expect(data).to.equal('error');
                done();
            });
        });
    });
});
