import remove from 'lodash/array/remove';
import MemberRecord from './records/member';

class MemberCollection {
    constructor() {
        // key: Member ID
        // value: Member Record
        this.members = {};

        // key: event id
        // value: array of members who need rides for that event
        this.membersWhoNeedRides = {};
    }

    get(id) {
        let member = this.members[id];

        if (!member) {
            throw new Error('No member found with this id: ' + id);
        }

        return member;
    }

    getAll() {
        return this.members;
    }

    setMembers(rawMembers) {
        rawMembers.forEach(rawMember => {
            this.members[rawMember.id] = new MemberRecord(rawMember);
        });
    }

    insert(eventId, membersWhoNeedRides) {
        this.membersWhoNeedRides[eventId] = membersWhoNeedRides.sort((a, b) => {
            return a.name > b.name;
        });
    }

    remove(eventId, memberIds) {
        remove(this.membersWhoNeedRides[eventId], member => {
            let shouldBeRemoved = false;

            memberIds.forEach(memberId => {
                if (member.id === parseInt(memberId, 10)) {
                    shouldBeRemoved = true;
                }
            });

            return shouldBeRemoved;
        });
    }

    addMembersToEvent(eventId, memberIds) {
        memberIds.forEach(memberId => {
            this.membersWhoNeedRides[eventId].push(this.members[memberId]);
        });
    }

    getMembersWhoNeedRides(eventId) {
        return this.membersWhoNeedRides[eventId];
    }


}

export default MemberCollection;
