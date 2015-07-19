'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('organization', {
            organizationId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
            name: Sequelize.STRING,
            address: Sequelize.STRING,
            description: Sequelize.STRING
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('organization');
    }
};
