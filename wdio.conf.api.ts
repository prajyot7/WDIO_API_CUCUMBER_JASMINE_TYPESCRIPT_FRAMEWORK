var path = require('path');
import type { Options } from '@wdio/types';
import { browser } from '@wdio/globals';
export const config: Options.Testrunner= {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
    },

    specs: [
        './test/**/*.spec.ts'       
    ],
    capabilities: [{

        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 1,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
    logLevel: 'error',
    outputDir: path.join('.', '/logs'),

    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    services: ['chromedriver', 'shared-store', 'devtools'],
    framework: 'jasmine',
    reporters: ['spec',
        [
            'allure',
            {
                outputDir: 'logs/results/allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],
    jasmineOpts: {
        defaultTimeoutInterval: 6000000,
        allScriptsTimeout: 6000000,
        getPageTimeout: 6000000,
        //
        // The Jasmine framework allows interception of each assertion in order to log the state of the application
        // or website depending on the result. For example, it is pretty handy to take a screenshot every time
        // an assertion fails.
        expectationResultHandler: function () {
            // do something
        }
    },
    onPrepare: async function () {
    },
    before: async function () {
        await browser.maximizeWindow();
    }
}