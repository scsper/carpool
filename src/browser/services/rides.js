import request from 'superagent';

module.exports = {
    addPassengersToRide(organizationId, memberIds, eventId, rideId) {
        return new Promise(function(resolve, reject) {
            let url = `/api/organizations/${organizationId}/events/${eventId}/rides/${rideId}`;

            request
                .put(url)
                .send({memberIds, action: 'add'})
                .set('Accept', 'application/json')
                .end(function(error, res) {
                    if (error) {
                        reject(error);
                    }

                    resolve(res.body);
                });
        });
    },

    removePassengersFromRide(organizationId, memberIds, eventId, rideId) {
        return new Promise(function(resolve, reject) {
            let url = `/api/organizations/${organizationId}/events/${eventId}/rides/${rideId}`;

            request
                .put(url)
                .send({memberIds, action: 'remove'})
                .set('Accept', 'application/json')
                .end(function(error, res) {
                    if (error) {
                        reject(error);
                    }

                    resolve(res.body);
                });
        });
    }
};
