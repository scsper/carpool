'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('event', {
            eventId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            organizationId: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
            name: Sequelize.STRING,
            address: Sequelize.STRING,
            description: Sequelize.STRING,
            startDate: Sequelize.DATE, // includes date and time
            endDate: Sequelize.DATE // includes date and time
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('event');
    }
};
