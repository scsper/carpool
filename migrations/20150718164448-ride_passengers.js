'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('ride_passengers', {
            rideId: Sequelize.INTEGER,
            userId: Sequelize.INTEGER
        });
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('ride_passengers');
    }
};
