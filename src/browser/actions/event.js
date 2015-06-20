var EventConstants = require('../constants/event.js');

var EventActions = {
    selectEvent: function(event) {
        this.dispatch(EventConstants.SELECT_EVENT, {
            event: event
        });
    }
};

module.exports = EventActions;
