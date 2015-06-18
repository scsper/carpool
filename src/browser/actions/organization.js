var OrganizationConstants = require('../constants/organization.js');
var OrganizationActions = {
    create: function(name) {
        this.dispatch(OrganizationConstants.CREATE, {name: name});
    }
};

module.exports = OrganizationActions;
