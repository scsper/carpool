var path = require('path');
module.exports = function(grunt) {
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config.js');

    grunt.initConfig({
        webpack: {
            options: webpackConfig,
            build: {}
        },

        watch: {
            app: {
                files: ['src/browser/**/*'],
                tasks: ['webpack:build'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Dev. build
    grunt.registerTask('default', ['webpack:build', 'watch:app']);
};
