import request from 'superagent';

module.exports = {
    addPassengersToRide(organizationId, memberIds, eventId, rideId) {
        return new Promise(function(resolve, reject) {
            let url = `/api/organizations/${organizationId}/events/${eventId}/rides/${rideId}`;

            request
                .post(url)
                .send({memberIds})
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
