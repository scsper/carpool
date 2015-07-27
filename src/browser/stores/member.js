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
    }
});

module.exports = MemberStore;
