'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('rides', {
            rideId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            driverId: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
            availableSeats: Sequelize.INTEGER,
            make: Sequelize.STRING,
            model: Sequelize.STRING,
            notes: Sequelize.STRING,
            arrivalTime: Sequelize.DATE,
            departureTime: Sequelize.DATE
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('rides');
    }
};
