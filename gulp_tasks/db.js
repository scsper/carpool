import gulp from 'gulp';
import gutil from 'gulp-util';
import runSequence from 'run-sequence';
import path from 'path';
import fs from 'fs';
import {execCmd} from './util';

const ENV = process.env.ENV || 'development';
const USER = process.env.USER;

gulp.task('db:config', () => {
    const CONFIG_TEMPLATE_PATH = '../config/database.json.template';
    const CONFIG_PATH = '../config/database.json';
    const template = fs.readFileSync(
        path.resolve(__dirname, CONFIG_TEMPLATE_PATH)
    ).toString();

    fs.writeFileSync(
        path.resolve(__dirname, CONFIG_PATH),
        template.replace(/<USER>/g, USER)
    );
});

gulp.task('db:create', (cb) => {
    execCmd(`psql -c "CREATE DATABASE carpool_${ENV} OWNER ${USER};"`, cb);
});

gulp.task('db:drop', (cb) => {
    execCmd(`psql -c "DROP DATABASE carpool_${ENV};"`, cb);
});

gulp.task('db:migrate', (cb) => {
    execCmd('node ./scripts/migrate.js migrate', cb);
});

gulp.task('db:rollback', (cb) => {
    execCmd('node ./scripts/migrate.js rollback', cb);
});

gulp.task('db:seed', (cb) => {
    execCmd('node ./scripts/seed.js', cb);
});

gulp.task('db:setup', (cb) => {
    runSequence('db:config', 'db:create', 'db:migrate', 'db:seed', cb);
});

gulp.task('db:reset', (cb) => {
    runSequence('db:drop', 'db:create', 'db:migrate', 'db:seed', cb);
});

gulp.task('db:test:prepare', (cb) => {
    execCmd(
        `psql -c "DROP DATABASE IF EXISTS carpool_test;" &&
         psql -c "CREATE DATABASE carpool_test OWNER ${USER};" &&
         ENV=test node ./scripts/migrate.js migrate`,
         cb
    );
});
