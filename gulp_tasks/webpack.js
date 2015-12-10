var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');

gulp.task('webpack', function(callback) {
    webpack({
        entry: './src/browser/launch.js',
        output: {
            path: 'public',
            filename: 'bundle.js',
            sourceMapFilename: '[file].map'
        },
        devtool: 'source-map',
        module: {
            loaders: [{
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM'
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }]
        }
    }, function(err, stats) {
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
