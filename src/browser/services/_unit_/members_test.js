import MemberService from '../members';
import request from 'superagent';

describe('browser/services/members.js', function() {
    beforeEach(function() {
        this.getStub = this.sandbox.stub(request, 'get').returns({
            end: this.endStub
        });
    });

    describe('#getMembers', function() {
        it('calls the correct url', function() {
            this.getStub.returns({
                end: function() {}
            });

            MemberService.getMembers(1);

            expect(this.getStub).to.be.calledWith('/api/organizations/1/members');
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

            MemberService.getMembers(1).then(function(data) {
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

            MemberService.getMembers(1).catch(function(data) {
                expect(data).to.equal('error');
                done();
            });
        });
    });
});
