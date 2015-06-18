var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function() {
    gulp.src(['src/**/*.js'])
        .pipe(eslint({
            configFile: 'config/eslint.json'
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
