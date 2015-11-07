import EventConstants from '../constants/event';
import EventService from '../services/events';

var EventActions = {
    openEvent({event, organizationId}) {
        EventService.getRidesForEvent(organizationId, event.id).then(response => {
            this.dispatch(EventConstants.OPEN_EVENT, {
                event: event,
                rides: response.rides,
                membersWhoNeedRides: response.membersWhoNeedRides
            });
        }).catch(error => {
            throw new Error(error);
        });
    }
};

module.exports = EventActions;
