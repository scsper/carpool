import {Promise} from 'es6-promise';
import request from 'superagent';
import template from 'lodash.template';

module.exports = {
    getMembers: function(organizationId) {
        return new Promise((resolve, reject) => {
            let urlTemplate = template('/api/organizations/${organizationId}/members');
            let url = urlTemplate({organizationId: organizationId});

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
