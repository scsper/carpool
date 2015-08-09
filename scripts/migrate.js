// migrate.js
var path = require('path');
var config = require('../config/database.json')[process.env.ENV || 'development'];

require('sql-migrations').run({
    basedir: path.resolve(__dirname, '../'),
    migrationsDir: path.resolve(__dirname, '../migrations'),
    user: config.user,
    host: config.host,
    password: config.password,
    db: config.db
});
