import EventConstants from '../constants/event';
import EventService from '../services/events';


var EventActions = {
    openEvent({event, organizationId}) {
        let mWNR; // membersWhoNeedRides

        if (event.id === 1) {
            mWNR = require('../../../test/fixtures/members_who_need_rides.js');
        } else if (event.id === 2) {
            mWNR = require('../../../test/fixtures/members_who_need_rides_2.js');
        }

        EventService.getRidesForEvent(organizationId, event.id).then(rides => {
            this.dispatch(EventConstants.OPEN_EVENT, {
                event: event,
                rides: rides,
                membersWhoNeedRides: mWNR
            });
        }).catch(error => {
            throw new Error(error);
        });
    }
};

module.exports = EventActions;
