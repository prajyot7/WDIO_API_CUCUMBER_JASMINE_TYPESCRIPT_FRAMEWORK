const { execSync } = require('child_process')
const { Select } = require('enquirer');
const { join } = require("path");
const fs = require('fs');

const TEST_MODULE = new Select({
    name: 'framework',
    message: 'Which test module you want to  run?',
    choices: ['UI', 'API']
})

const RUNNER_SERVICE = new Select({
    name: 'runmode',
    message: 'Where do you want to run your tests?',
    choices: ['Local', 'Docker']
})

const UI_TEST_TYPE = new Select({
    name: 'runmode',
    message: 'Which framework do you want to run?',
    choices: ['Jasmine', 'Cucumber']
})

let runnerCommand = {
    apiRunner: () => { execSync('cd api && npm run wdio:test', { stdio: 'inherit' }) },
    localJasmineRunner: () => execSync('cd web && npm run wdio:test', { stdio: 'inherit' }),
    dockerJasmineRunner: () => {
        execSync('cd web && npm run test:docker', { stdio: 'inherit' })
    },
    localBDDRunner: () => execSync('cd web && npm run wdio_cuc_su:run', { stdio: 'inherit' }),
    dockerBDDRunner: () => {
        execSync('cd web && npm run test:e2e:docker', { stdio: 'inherit' })
    }
}

const API_NODE_MODULES_PATH = join(process.cwd(), 'api', 'node_modules');
const WEB_NODE_MODULES_PATH = join(process.cwd(), 'web', 'node_modules');

const isNodeModuleDoesNotExists = (path) => {
    if (!fs.existsSync(path)) {
        console.log(`"node_modules" folder is missing!!! Starting installation...`);
        return true;
    }
    else return false;
}

let installerCommand = {
    api: () => { execSync('cd api && npm install --legacy-peer-deps', { stdio: 'inherit' }) },
    web: () => execSync('cd web && npm install --legacy-peer-deps', { stdio: 'inherit' }),
}

let nodeModuleInstaller = {
    api: () => {
        if (isNodeModuleDoesNotExists(API_NODE_MODULES_PATH))
            installerCommand.api();
    },
    web: () => {
        if (isNodeModuleDoesNotExists(WEB_NODE_MODULES_PATH))
            installerCommand.web();
    }
}

const configRunner = async () => {
    let answers = await TEST_MODULE.run();
    switch (answers) {
        case "API":
            nodeModuleInstaller.api();
            runnerCommand.apiRunner();
            break;
        case "UI":
            nodeModuleInstaller.web();
            let ui_test_type = await UI_TEST_TYPE.run();
            if (ui_test_type == 'Jasmine') {
                let Jasmine_runmode = await RUNNER_SERVICE.run();
                if (Jasmine_runmode == 'Local') { runnerCommand.localJasmineRunner() }
                else if (Jasmine_runmode == 'Docker') { runnerCommand.dockerJasmineRunner() }
            }
            else if (ui_test_type == 'Cucumber') {
                let bdd_runmode = await RUNNER_SERVICE.run();
                if (bdd_runmode == 'Local') { runnerCommand.localBDDRunner() }
                else if (bdd_runmode == 'Docker') { runnerCommand.dockerBDDRunner() }
            }
            break;
        default: throw new Error("Please select option from ::  api | jasmine | cucumber")
    }
}

configRunner()