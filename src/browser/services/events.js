var Promise = require('es6-promise').Promise;
var request = require('superagent');

module.exports = {
    getEvent: function() {
        return new Promise(function(resolve, reject) {
            request
                .get('/lessons/1')
                .end(function(error, res) {
                    if(error) {
                        reject(error);
                    }

                    resolve(res.body);
                });
        });
    }
};
