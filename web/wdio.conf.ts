import type { Options } from '@wdio/types'
import { setValue } from '@wdio/shared-store-service';
import { LoginPage } from '../web/jas_e2e/page-objects/login.page';
import { herokuappLoginData } from './resources/logindata';
var path = require('path');
export const config: WebdriverIO.Config = {
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
    },
    specs: [
        './jas_e2e/**/*.e2e.ts'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    suites:{
        smoke: ['./jas_e2e/smoke/smoke.e2e.ts'],
        regression: ['./jas_e2e/regression/orangehrm.e2e.ts']
    },
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'error',
    outputDir:path.join('.','/logs'),
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver', 'shared-store', 'devtools'],
    framework: 'jasmine',
    reporters: [
        'spec',
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
        expectationResultHandler: function (passed, assertion) {
            // do something
        }
    },
    afterTest: async function (test, context, result) {
        if (!result.passed) {
            await browser.takeScreenshot();
          }
    },
    onPrepare: async function () {
    },
    before: async function () {
        const hostname = process.env.hostname ? process.env.hostname : 'https://the-internet.herokuapp.com';
        const url = process.env.url ? process.env.url : '/login';
        const browserWaitTimeout = process.env.browserWaitTimeout ? process.env.browserWaitTimeout : 25000;
        const defautDebounceTimeout = process.env.defautDebounceTimeout ? process.env.defautDebounceTimeout : 25000;
        const dialogWaitTimeout = process.env.dialogWaitTimeout ? process.env.dialogWaitTimeout : 25000;
        await setValue('hostname', hostname)
        await setValue('url', url)
        await setValue('browserWaitTimeout', browserWaitTimeout)
        await setValue('dialogWaitTimeout', dialogWaitTimeout)
        await setValue('defautDebounceTimeout', defautDebounceTimeout)
        // await browser.maximizeWindow();
        // enableThrottling(true);
        // let loginPage = new LoginPage();
        // await loginPage.login(herokuappLoginData.validUserName, herokuappLoginData.validPassword())
        
    }
}
