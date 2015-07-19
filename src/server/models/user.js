var Sequelize = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('User', {
        userId: Sequelize.INTEGER,
        name: Sequelize.STRING,
        phone: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: Sequelize.STRING,
        type: Sequelize.ENUM('admin', 'driver', 'passenger'),
        activated: Sequelize.BOOLEAN,
        address: Sequelize.STRING
    }, {
        classMethods: {
            associate: function(Models) {
                Models.User.belongsToMany(Models.Ride, {
                    foreignKey: 'userId',
                    through: 'ride_passengers'
                });
            }
        }
    });
};
