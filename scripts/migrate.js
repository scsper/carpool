// migrate.js
var path = require('path');
var config = require('../config/pg.json');

require('sql-migrations').run({
    basedir: path.resolve(__dirname, '../'),
    migrationsDir: path.resolve(__dirname, '../migrations'),
    user: config.development.username,
    host: 'localhost',
    password: 'password',
    db: config.development.database
});
