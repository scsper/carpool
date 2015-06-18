var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
    gulp.src(['test/setup/unit.js', 'src/**/_unit_/*_test.js'])
        .pipe(mocha({reporter: 'nyan'}));
});
