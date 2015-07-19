'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('users', {
            userId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
            name: Sequelize.STRING,
            phone: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            type: Sequelize.ENUM('admin', 'driver', 'passenger'),
            activated: Sequelize.BOOLEAN,
            address: Sequelize.STRING
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('users');
    }
};
