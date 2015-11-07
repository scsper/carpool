var Fluxxor = require('fluxxor');
var OrganizationConstants = require('../constants/organization.js');

var OrganizationStore = Fluxxor.createStore({
    initialize(organizations) {
        this.organizations = organizations;
    },

    getAll() {
        return this.organizations;
    },

    getActiveOrganization() {
        return this.organizations[0];
    }
});

module.exports = OrganizationStore;
