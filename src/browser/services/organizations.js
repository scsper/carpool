import {Promise} from 'es6-promise';
import request from 'superagent';

module.exports = {
    getOrganizations: function() {
        return new Promise((resolve, reject) => {
            request
                .get('/api/organizations')
                .end(function(error, res) {
                    if (error) {
                        reject(error);
                    }

                    resolve(res.body);
                });
        });
    }
};
