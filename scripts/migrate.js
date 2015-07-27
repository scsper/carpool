// migrate.js
var path = require('path');

console.log(path.resolve(__dirname, '../'));

require('sql-migrations').run({
    basedir: path.resolve(__dirname, '../'),
    migrationsDir: path.resolve(__dirname, '../migrations'),
    user: 'dabramov',
    host: 'localhost',
    password: 'password',
    db: 'carpool_dev'
});
