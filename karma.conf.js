// Karma configuration
// Generated on Sun Jun 19 2016 11:12:38 GMT-0700 (PDT)
'use strict';
module.exports = function (config) {
    var path = require('path');
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'specLoader.js',
            'node_modules/sinon/pkg/sinon.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'specLoader.js': ['webpack']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        plugins: [
            require('karma-webpack'),
            require('karma-chrome-launcher'),
            require('karma-coverage'),
            require('karma-phantomjs-launcher'),
            require('karma-jasmine')
        ],
        webpack: {
            module: {
                /*     noParse: [
                 /node_modules\/sinon/
                 ],*/
               /* loaders: [
                    {test: /sinon.js$/, loader: 'imports?define=>false'}
                ],*/
                preLoaders: [
                    {
                        test: /\.js$/,
                        include: path.resolve('sut'),
                        loader: 'istanbul-instrumenter-loader'
                    }
                ]
            }
        }
    });
};
