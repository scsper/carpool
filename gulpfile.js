require("babel/register");
require('./gulp_tasks/webpack');
require('./gulp_tasks/lint');
require('./gulp_tasks/server');
require('./gulp_tasks/test');
require('./gulp_tasks/migrate');
require('./gulp_tasks/rollback');
require('./gulp_tasks/merge_coverage');


var gulp = require('gulp');

gulp.task('default', ['webpack', 'server']);
