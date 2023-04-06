import { setValue } from '@wdio/shared-store-service';
import { browser} from '@wdio/globals';
import type { Options } from '@wdio/types'
import FrameworkConstants from './static/FrameworkConstants';
var path = require('path');
export const config: WebdriverIO.Config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
    },
    
    
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // of the configuration file being run.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    specs: [
        './cucumber/features/**/*.feature'
    ],
    //Excluding register page as website is absolute
    exclude: [],
    // exclude: ['./cucumber/features/**/register.feature'],
    suites: {
        smoke: ['./cucumber/features/smoke/*.feature'],
        regression: ['./cucumber/features/regression/*.feature']
    },
    // Patterns to exclude.
   
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    // capabilities: [{
    
    //     // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    //     // grid with only 5 firefox instances available you can make sure that not more than
    //     // 5 instances get started at a time.
    //     maxInstances: 1,
    //     //
    //     browserName: 'chrome',
    //     acceptInsecureCerts: true
    //     // If outputDir is provided WebdriverIO can capture driver session logs
    //     // it is possible to configure which logTypes to include/exclude.
    //     // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    //     // excludeDriverLogs: ['bugreport', 'server'],
    // }],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            "goog:chromeOptions": {
                "prefs": {
                    "download.default_directory": FrameworkConstants.DOWNLOAD_FOLDER_PATH
                }
            }
        }
    ],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 120000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver', 'shared-store', 'devtools'],
    framework: 'cucumber',
    specFileRetries: 0,
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'logs/results/allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true
            }
        ]
    ],
    cucumberOpts: {
        require: ['./cucumber/step-definitions/*.ts'],
        backtrace: false,
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
     afterStep: async function (step, scenario, result, context) {
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
