import MemberRecord from './records/member';

class MemberCollection {
    constructor() {
        // key: Member ID
        // value: Member Record
        this.members = {};
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
}

export default MemberCollection;
