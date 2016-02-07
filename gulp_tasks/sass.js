var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('sass', function () {
  return gulp.src('src/browser/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public'));
});
