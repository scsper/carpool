var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');
var webpackConfig = require('../config/webpack.config');

gulp.task('webpack', function(callback) {
    webpack(Object.create(webpackConfig), function(err, stats) {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }
        gutil.log('[webpack]', stats.toString({
            chunkModules: false,
            timing: true,
            colors: true
        }))
        callback();
    });
});
