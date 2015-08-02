// migrate.js
var path = require('path');
var config = require('../config/pg.json');

require('sql-migrations').run({
    basedir: path.resolve(__dirname, '../'),
    migrationsDir: path.resolve(__dirname, '../migrations'),
    user: 'ssperlin',
    host: 'localhost',
    password: 'password',
    db: 'carpool_dev'
});
