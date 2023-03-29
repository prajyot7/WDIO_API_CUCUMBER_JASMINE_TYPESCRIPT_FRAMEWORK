<h2 align="center"> Web and API Test Automation Framework </h2>

<h4 align="center">
[![WEB CI](https://github.com/prajyot7/WDIO_API_CUCUMBER_JASMINE_TYPESCRIPT_FRAMEWORK/actions/workflows/web.yml/badge.svg)](https://github.com/prajyot7/WDIO_API_CUCUMBER_JASMINE_TYPESCRIPT_FRAMEWORK/actions/workflows/web.yml)

[![API CI](https://github.com/prajyot7/WDIO_API_CUCUMBER_JASMINE_TYPESCRIPT_FRAMEWORK/actions/workflows/api.yml/badge.svg)](https://github.com/prajyot7/WDIO_API_CUCUMBER_JASMINE_TYPESCRIPT_FRAMEWORK/actions/workflows/api.yml)

</h4>

#### Requirements
[![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![Java](https://img.shields.io/badge/-JDK-%23007396?logo=java&logoColor=black&)](https://www.oracle.com/java/technologies/downloads/)
[![Docker](https://img.shields.io/badge/-Docker-0db7ed?logo=docker&logoColor=white)](https://docs.docker.com/engine/install/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

#### Clone Repository
```bash
1. git clone https://github.com/prajyot7/WDIO_API_CUCUMBER_JASMINE_TYPESCRIPT_FRAMEWORK.git
2. Navigate to `WDIO_API_CUCUMBER_JASMINE_TYPESCRIPT_FRAMEWORK`
```
-----

### Interactive CLI to run test:
> Make sure mobile setup has been completed if selecting mobile as CLI option. See [Mobile Test](#Mobile-Test) for setup instructions. Before running actual test, presence of node_modules folder will be validated and if not not found installation will take place before proceeding any furthur.
```bash
npm start
```
It start wizard with test module options, based on user selection either of the below module will start <b>locally</b> or inside <b>docker container</b>. Code to control wizard and user selection is available in 'start.js' which is built using [enquirer](https://www.npmjs.com/package/enquirer) node package.<br>
<b>Test Module Options : </b> | UI | API | <br>
![cli_demo](https://user-images.githubusercontent.com/65847528/152398324-b0e44fd0-acdf-4f5e-b762-acb53a9f361c.gif)


-----
### Web Test
Install dependencies:
> Navigate to "web" folder and then run below command
```bash
npm install --legacy-peer-deps
```

Setup .env file:<br>
create `.env` file inside web folder and update content with reference to `.env.example`

Run test in local:
> By default test will run in HEADLESS mode.
> Update MODE=LOCAL in .env file to see test running in browser.
```bash
npm run wdio:test             [ Jasmine tests ]
npm run wdio_cuc_su:run     [ Cucumber BDD tests ]
```

Run test in Docker:
```bash
npm run test:docker       [ Jasmine tests]
npm run wdio_cuc_su:run:docker   [ Cucumber BDD tests ]
```
> Pre and Post script will handle start and stop of docker containers automatically.
> If containers does not stop automatically run "docker-compose down" command.

Generate Report:
```bash
npm run report:Jasmine
npm run report:cucumber
```

Report Paths:
```bash
Jasmine: web/Jasminewesome-report/Jasminewesome-report.html
cucumber: web/reports/cucumber/cucumber-report.html
```

Send Report:
> Update .env file details with reference of .env.example file
```bash
npm run mailCucumberReport
npm run mailJasmineResult
```
-----

### API Test
Install dependencies:
> Navigate to "api" folder and then run below command
```bash
npm install --legacy-peer-deps
```

Run test:
```bash
npm run wdio:test
```

Report Paths:
```bash
api/reports/Jasminewesome.html
```

-----

#### Features:
    - Web and API Testing
    - Jasmine and Cucumber BDD framework
    - Page Object Design pattern
    - Docker with VNC integration
    - Parallel execution
    - Cross browser testing
    - Retry failed test
    - Screenshot in report for failed tests
    - Github actions
    - Send test report to list of Gmail
    - Use of types for method params optimization
    - Improved import statement using tsconfig path

#### Tech stacks:
[![WebdriverIO](https://img.shields.io/badge/-WebdriverI/O-EA5906?logo=WebdriverIO&logoColor=white)](https://webdriver.io/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?logo=Typescript&logoColor=black)](https://www.typescriptlang.org/)
[![Jasmine](https://img.shields.io/badge/-Jasmine-%238D6748?logo=Jasmine&logoColor=white)](https://Jasminejs.org/)
[![CucumberIO](https://img.shields.io/badge/-Cucumber.io-brightgreen?logo=cucumber&logoColor=white)](https://cucumber.io/)
[![ChaiJS](https://img.shields.io/badge/-ChaiJS-FEDABD?logo=Chai&logoColor=black)](https://www.chaijs.com/)
[![SuperTest](https://img.shields.io/badge/-SuperTest-07BA82?logoColor=white)](https://github.com/visionmedia/supertest)
[![Enquirer](https://img.shields.io/badge/-Enquirer-f0db4f?logoColor=white)](https://github.com/enquirer/enquirer)
[![Docker](https://img.shields.io/badge/-Docker-0db7ed?logo=docker&logoColor=white)](https://www.docker.com/)
[![Node-Mailer](https://img.shields.io/badge/-Node%20Mailer-89D05C?logo=gmail&logoColor=blue)](https://github.com/nodemailer/nodemailer)

#### Folder Structure:
![e2e_framework_folders](https://user-images.githubusercontent.com/65847528/168474570-5eca8112-25b7-45ca-b411-355d0ce39079.png)
