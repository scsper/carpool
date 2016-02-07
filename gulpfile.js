require('babel/register');
require('./gulp_tasks/webpack');
require('./gulp_tasks/lint');
require('./gulp_tasks/server');
require('./gulp_tasks/test');
require('./gulp_tasks/merge_coverage');
require('./gulp_tasks/db');
require('./gulp_tasks/generate');
require('./gulp_tasks/sass');


var gulp = require('gulp');

gulp.task('default', ['webpack', 'server', 'sass']);
