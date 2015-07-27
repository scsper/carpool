var EventConstants = require('../constants/event.js');

var EventActions = {
    openEvent(payload) {
        this.dispatch(EventConstants.OPEN_EVENT, {
            event: payload.event,
            rides: require('../../../test/fixtures/rides.js')
        });
    },

    getInitialEvents(payload) {
        this.dispatch(EventConstants.GET_INITIAL_EVENTS, {
            events: require('../../../test/fixtures/events.js')
        });
    }
};

module.exports = EventActions;
