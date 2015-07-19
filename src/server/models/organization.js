var Sequelize = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Organization', {
        organizationId: Sequelize.INTEGER,
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        description: Sequelize.STRING
    });
};
