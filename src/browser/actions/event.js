var EventConstants = require('../constants/event.js');

var EventActions = {
    openEvent(payload) {
        let mWNR; // membersWhoNeedRides

        if (payload.event.id === 1) {
            mWNR = require('../../../test/fixtures/members_who_need_rides.js');
        } else if (payload.event.id === 2) {
            mWNR = require('../../../test/fixtures/members_who_need_rides_2.js');
        }

        this.dispatch(EventConstants.OPEN_EVENT, {
            event: payload.event,
            rides: require('../../../test/fixtures/rides.js'),
            membersWhoNeedRides: mWNR
        });
    },

    getInitialEvents(payload) {
        this.dispatch(EventConstants.GET_INITIAL_EVENTS, {
            events: require('../../../test/fixtures/events.js')
        });
    }
};

module.exports = EventActions;
