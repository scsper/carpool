import gulp from 'gulp';
import util from 'gulp-util';
import {execCmd} from './util';

const MIGRATION_NAME = util.env.name;

gulp.task('g:migration', (cb) => {
    execCmd(`node ./scripts/migrate.js create ${MIGRATION_NAME}`, cb);
});
