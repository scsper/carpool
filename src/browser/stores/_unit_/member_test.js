var MemberStore = require('../member.js');

describe('Member Store', () => {
    beforeEach(function() {
        this.store = new MemberStore();
        this.store.members = require('../../../../test/fixtures/members.js');
    });

    it('returns all of the members', function() {
        let members = this.store.get();
        expect(members).to.deep.equal(require('../../../../test/fixtures/members.js'));
    });

    it('returns all of the members who need rides', function() {
        this.store.membersWhoNeedRides = {
            1: [{
                name: 'test'
            }]
        };

        let members = this.store.getMembersWhoNeedRides(1);

        expect(members[0].name).to.equal('test');
        expect(members.length).to.equal(1);
    });

    it('populates the membersWhoNeedRides in sorted order', function() {
        let eventId = 1;
        let payload = {
            event: {
                id: eventId
            },

            membersWhoNeedRides: require('../../../../test/fixtures/members_who_need_rides.js')
        };

        this.store._addEvent(payload);

        expect(this.store.membersWhoNeedRides[eventId][0].id).to.equal(6);
        expect(this.store.membersWhoNeedRides[eventId][1].id).to.equal(5);
        expect(this.store.membersWhoNeedRides[eventId][2].id).to.equal(7);
        expect(this.store.membersWhoNeedRides[eventId].length).to.equal(3);
    });
});
