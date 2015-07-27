var path = require('path');

// Karma configuration
// Generated on Sun Jul 26 2015 21:04:26 GMT-0700 (PDT)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: path.resolve(__dirname, '../'),


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai'],


        // list of files / patterns to load in the browser
        files: [
            'test/setup/browser.js'
        ],


        // list of files to exclude
        exclude: [
            // 'node_modules/**/*'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/setup/browser.js': ['webpack', 'sourcemap']
        },

        webpack: {
            devtool: 'inline-source-map',
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
            },
            watch: false
        },
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            noInfo: true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        plugins: [
            require('karma-webpack'),
            require('karma-mocha'),
            require('karma-chrome-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-spec-reporter'),
            require('karma-chai'),
            require('karma-sourcemap-loader'),
            require('karma-source-map-support')
        ]
    })
}
