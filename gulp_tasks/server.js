// Gulpfile.js
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('server', function() {
    nodemon({
            script: 'scripts/start.js',
            ext: 'jsx js scss',
            ignore: ['public'],
            tasks: ['webpack', 'sass']
        }).on('restart', function() {
            console.log('restarted!');
        });
});
