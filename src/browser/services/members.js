var Promise = require('es6-promise').Promise;
var request = require('superagent');
var template = require('lodash.template');

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
