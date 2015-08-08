var Promise = require('es6-promise').Promise;
var request = require('superagent');

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
