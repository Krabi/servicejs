
//npm install -g karma karma-chrome-launcher karma-firefox-launcher karma-phantomjs-launcher karma-jasmine karma-junit-reporter karma-coverage karma-html-reporter
module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            // main library
            'src/main/webapp/js/servicejs.js',
            // TESTABLE ITEMS - examples and test services
            'src/main/webapp/js/serviceA.js',
            'src/main/webapp/js/serviceB.js',
            'src/main/webapp/js/serviceC.js',
            // service finalization
            'src/main/webapp/js/finalize.js',
            // tests
            'src/test/js/unit/**/*.js'
        ],
        autoWatch: true,
        colors: true,
        logLevel: config.LOG_INFO,
        port: 9876,
        singleRun: false,
        reporters: ['progress', 'coverage', 'html'/*, 'spec'*/],
        frameworks: ['jasmine'],
        browsers: [/*'Chrome',*/'PhantomJS'],
        preprocessors: {
            'unit/*.spec.js': ['coverage']
        },
        htmlReporter: {
            outputDir: 'target/html'
        },
        coverageReporter: {
            type: 'html',
            dir: 'target/coverage',
            reporters: [
                {type: 'lcov', subdir: '.'},
                {type: 'text-summary'}
            ]
        }
    });
};
