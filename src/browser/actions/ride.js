var RideConstants = require('../constants/ride.js');
import RideService from '../services/rides';

var RideActions = {
    addMembersToRide({memberIds, rideId, eventId}) {
        let organizationId = this.flux.store('OrganizationStore').getActiveOrganization().id;

        RideService.addPassengersToRide(organizationId, memberIds, eventId, rideId).then(() => {
            this.dispatch(RideConstants.ADD_MEMBERS_TO_RIDE, {
                memberIds: memberIds,
                rideId: rideId,
                eventId: eventId
            });
        });
    },

    removeMembersFromRide({memberIds, rideId, eventId}) {
        let organizationId = this.flux.store('OrganizationStore').getActiveOrganization().id;

        RideService.removePassengersFromRide(organizationId, memberIds, eventId, rideId).then(() => {
            this.dispatch(RideConstants.REMOVE_MEMBERS_FROM_RIDE, {
                memberIds: memberIds,
                rideId: rideId,
                eventId: eventId
            });
        });
    }
};

module.exports = RideActions;
