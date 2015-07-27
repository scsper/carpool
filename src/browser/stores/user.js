var Fluxxor = require('fluxxor');

var UserStore = Fluxxor.createStore({
    initialize: function() {
        this.user = require('../../../test/fixtures/driver.js');
    },

    get: function() {
        return {
            user: this.user
        };
    }
});

module.exports = UserStore;
