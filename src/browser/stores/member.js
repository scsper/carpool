var Fluxxor = require('fluxxor');
var RideConstants = require('../constants/ride.js');
var remove = require('lodash/array/remove');

var members = require('../../../test/fixtures/members.js');
var membersWhoNeedRides = require('../../../test/fixtures/members_who_need_rides.js');

/**
 * This store contains all the members for a given organization.
 */
var MemberStore = Fluxxor.createStore({
    initialize() {
        this.members = members;
        this.membersWhoNeedRides = membersWhoNeedRides.sort((a, b) => {
            return a.name > b.name;
        });

        this.bindActions(
            RideConstants.ADD_MEMBERS_TO_RIDE, this._removeMembersWhoNeedRides
        );
    },

    _removeMembersWhoNeedRides(payload) {
        let memberIds = payload.memberIds;

        remove(this.membersWhoNeedRides, member => {
            let shouldBeRemoved = false;

            memberIds.forEach(memberId => {
                if (member.id === parseInt(memberId, 10)) {
                    shouldBeRemoved = true;
                }
            });

            return shouldBeRemoved;
        });

        this.emit('change');
    },

    get() {
        return this.members;
    },

    getMembersWhoNeedRides() {
        return this.membersWhoNeedRides;
    }
});

module.exports = MemberStore;
