var RideConstants = require('../constants/ride.js');

var RideActions = {
    addMembersToRide(payload) {
        this.dispatch(RideConstants.ADD_MEMBERS_TO_RIDE, {
            memberIds: payload.memberIds,
            rideId: payload.rideId,
            eventId: payload.eventId
        });
    }
};

module.exports = RideActions;
