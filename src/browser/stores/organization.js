var Fluxxor = require('fluxxor');
var OrganizationConstants = require('../constants/organization.js');

var OrganizationStore = Fluxxor.createStore({
    initialize: function() {
        this.organizations = [{
            name: 'hello'
        }];

        this.bindActions(
            OrganizationConstants.CREATE, this.create
        );
    },

    create: function(name) {
        this.organizations = [];
        this.organizations.push({
            name: name
        });
        this.emit('change');
    },

    get: function() {
        return {
            orgs: this.organizations
        };
    }
});

module.exports = OrganizationStore;
