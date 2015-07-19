var Sequelize = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Event', {
        organizationId: Sequelize.INTEGER,
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        description: Sequelize.STRING,
        startDate: Sequelize.DATE, // includes date and time
        endDate: Sequelize.DATE // includes date and time
    }, {
        classMethods: {
            associate: function(Models) {
                // set a foreign key of 'organizationId'
                Models.Organization.belongsTo(Models.Event, {as: 'organization'});
            }
        }
    });
};
