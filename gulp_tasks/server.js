var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('server', function() {
    server.run(['index.js']);

    gulp.watch(['index.js', 'src/server/**/*'], [server.run]);
    gulp.watch(['src/browser/**/*'], ['webpack']);
});
