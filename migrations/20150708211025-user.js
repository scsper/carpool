'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            },
            name: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.ENUM('admin', 'driver', 'passenger')
            },
            activated: {
                type: Sequelize.BOOLEAN
            },
            address: {
                type: Sequelize.STRING
            }
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('users');
    }
};
