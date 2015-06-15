module.exports = function(grunt) {
    var webpackConfig = require('./config/webpack.config.js');

    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                // run setup before everything else runs
                src: ['test/setup/unit.js', 'src/**/_unit_/*_test.js']
            }
        },

        webpack: {
            options: webpackConfig,
            build: {}
        },

        express: {
            dev: {
                options: {
                    script: './index.js'
                }
            }
        },

        watch: {
            app: {
                files: ['src/browser/**/*', 'src/server/**/'],
                tasks: ['webpack:build', 'express:dev'],
                options: {
                    spawn: false
                }
            }
        },

        eslint: {
            options: {
                configFile: 'config/eslint.json'
            },
            target: ['*.js']
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-eslint');

    // Dev. build
    grunt.registerTask('default', [
        'webpack:build',
        'express:dev',
        'watch:app'
    ]);

    grunt.registerTask('lint', ['eslint']);
    grunt.registerTask('test', ['lint', 'mochaTest']);

};
