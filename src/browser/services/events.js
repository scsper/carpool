import {Promise} from 'es6-promise';
import request from 'superagent';
import template from 'lodash.template';

module.exports = {
    getRidesForEvent(organizationId, eventId) {
        return new Promise(function(resolve, reject) {
            let urlTemplate = template('/api/organizations/${organizationId}/events/${eventId}/rides');
            let url = urlTemplate({
                organizationId: organizationId,
                eventId: eventId
            });

            request
                .get(url)
                .end(function(error, res) {
                    if (error) {
                        reject(error);
                    }

                    resolve(res.body);
                });
        });
    }
};
