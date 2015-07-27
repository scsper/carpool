var Fluxxor = require('fluxxor');
var members = require('../../../test/fixtures/members.js');

/**
 * This store contains all the members for a given organization.
 */
var MemberStore = Fluxxor.createStore({
    initialize: function() {
        // key: organization id
        // value: list of members belonging to that organization
        // this.membersByOrganization = {
        //     1: members
        // }

        this.members = members;
    },

    get: function() {
        return this.members;
    },

    getList() {
        let members = [];

        for (let memberId in this.members) {
            if (this.members.hasOwnProperty(memberId)) {
                members.push(this.members[memberId]);
            }
        }

        members.sort((a, b) => {
            return a.name > b.name;
        });

        return members;
    }
});

module.exports = MemberStore;
