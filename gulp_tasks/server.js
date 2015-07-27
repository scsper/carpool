// Gulpfile.js
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('server', function() {
    nodemon({
            script: 'src/server/app.js',
            ext: 'jsx js',
            ignore: [],
            tasks: ['webpack']
        }).on('restart', function() {
            console.log('restarted!')
        });
});
