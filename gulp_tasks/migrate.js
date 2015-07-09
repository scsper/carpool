var gulp = require('gulp');
var exec = require('gulp-exec');

gulp.task('migrate', function() {
    gulp.src('')
        .pipe(exec('./node_modules/sequelize-cli/bin/sequelize db:migrate --config="config/pg.json"'))
        .pipe(exec.reporter());
});
