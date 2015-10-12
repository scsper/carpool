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

    getAll() {
        return this.members;
    }

    get(id){
        return this.members[id];
    }

    getMembersWhoNeedRides(eventId) {
        return this.membersWhoNeedRides[eventId];
    }

    setMembers(rawMembers) {
        rawMembers.forEach(rawMember => {
            this.members[rawMember.id] = new MemberRecord(rawMember);
        });
    }
}

export default MemberCollection;
