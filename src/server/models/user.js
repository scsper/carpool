var sequelize = require('sequelize');

module.exports = function(Sequelize) {
    return Sequelize.define('user', {
        id: sequelize.INTEGER,
        name: sequelize.STRING
    });
};
