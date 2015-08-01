var Fluxxor = require('fluxxor');
var EventConstants = require('../constants/event.js');
var RideConstants = require('../constants/ride.js');
var remove = require('lodash/array/remove');

var members = require('../../../test/fixtures/members.js');

/**
 * This store contains all the members for a given organization.
 */
var MemberStore = Fluxxor.createStore({
    initialize() {
        this.members = members;
        // key: event id
        // value: array of members who need rides for that event
        this.membersWhoNeedRides = {};

        this.bindActions(
            RideConstants.ADD_MEMBERS_TO_RIDE, this._removeMembersWhoNeedRides,
            RideConstants.REMOVE_MEMBERS_FROM_RIDE, this._addMembersWhoNeedRides,
            EventConstants.OPEN_EVENT, this._addEvent
        );
    },

    _addEvent(payload) {
        this.membersWhoNeedRides[payload.event.id] = payload.membersWhoNeedRides.sort((a, b) => {
            return a.name > b.name;
        });

        this.emit('change');
    },

    _removeMembersWhoNeedRides(payload) {
        let memberIds = payload.memberIds;

        remove(this.membersWhoNeedRides[payload.eventId], member => {
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

    _addMembersWhoNeedRides(payload) {
        payload.memberIds.forEach(memberId => {
            this.membersWhoNeedRides[payload.eventId].push(this.members[memberId]);
        }, this);

        this.emit('change');
    },

    get() {
        return this.members;
    },

    getMembersWhoNeedRides(eventId) {
        return this.membersWhoNeedRides[eventId];
    }
});

module.exports = MemberStore;
