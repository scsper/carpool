require('./gulp_tasks/webpack');
require('./gulp_tasks/lint');
require('./gulp_tasks/server');
require('./gulp_tasks/test');

var gulp = require('gulp');

gulp.task('default', ['server']);
