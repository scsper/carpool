var gulp = require('gulp');
var exec = require('gulp-exec');

gulp.task('rollback', function() {
    gulp.src('')
        .pipe(exec('./node_modules/sequelize-cli/bin/sequelize db:migrate:undo --config="config/pg.json"'))
        .pipe(exec.reporter());
});
