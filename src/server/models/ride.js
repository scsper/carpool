var Sequelize = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Ride', {
        rideId: Sequelize.INTEGER,
        availableSeats: Sequelize.INTEGER,
        make: Sequelize.STRING,
        model: Sequelize.STRING,
        notes: Sequelize.STRING,
        arrivalTime: Sequelize.DATE,
        departureTime: Sequelize.DATE
    }, {
        classMethods: {
            associate: function(Models) {
                // set the many-to-many relationship for rides and passengers
                Models.Ride.belongsToMany(Models.User, { foreignKey: 'rideId', through: 'ride_passengers' });

                // set a foreign key of 'driverId'
                Models.User.belongsTo(Models.Ride, {as: 'driver'});
            }
        }
    });
};
