var Fluxxor = require('fluxxor');
var OrganizationConstants = require('../constants/organization.js');

var OrganizationStore = Fluxxor.createStore({
    initialize() {
        this.organizations = window.organizations;
    },

    get() {
        return this.organizations;
    }
});

module.exports = OrganizationStore;
