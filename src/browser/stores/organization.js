var Fluxxor = require('fluxxor');
var OrganizationConstants = require('../constants/organization.js');

var OrganizationStore = Fluxxor.createStore({
    initialize: function() {
        this.organizations = require('../../../test/fixtures/organization.js');
    },

    get: function() {
        return this.organizations;
    }
});

module.exports = OrganizationStore;
