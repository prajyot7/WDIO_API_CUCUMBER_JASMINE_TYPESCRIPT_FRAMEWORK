<h2 align="center"> Web, API and Mobile Test Automation Framework </h2>


#### Requirements
[![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![Java](https://img.shields.io/badge/-JDK-%23007396?logo=java&logoColor=black&)](https://www.oracle.com/java/technologies/downloads/)

#### Clone Repository
```bash
1. git clone https://github.com/prajyot7/WDIO_API_CUCUMBER_JASMINE_TYPESCRIPT_FRAMEWORK.git
2. Navigate to `WDIO_API_CUCUMBER_JASMINE_TYPESCRIPT_FRAMEWORK`
```
-----
Set up project
After cloning project open terminal in Visual Studio Code in project folder and run this command:"npm install". This will install all node modules and dependencies from package.json file.

### JASMINE Test

Run test in local:
> By default test will run in HEADLESS mode.
> Update MODE=LOCAL in .env file to see test running in browser.
```bash
npm test             [ Mocha tests ]
npm run test:e2e     [ Cucumber BDD tests ]
```


Generate Report:
```bash
npm run report:mocha
npm run report:cucumber
```


Send Report:
> Update .env file details with reference of .env.example file
```bash
npm run mailCucumberReport
npm run mailMochaResult
```
-----

### API Test

Run test:
```bash
npm test
```

Report Paths:
```bash
api/reports/mochawesome.html
```

-----

#### Features:
    - Web and API Testing
    - Jasmine and Cucumber BDD framework
    - Page Object Design pattern
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
[![CucumberIO](https://img.shields.io/badge/-Cucumber.io-brightgreen?logo=cucumber&logoColor=white)](https://cucumber.io/)
[![ChaiJS](https://img.shields.io/badge/-ChaiJS-FEDABD?logo=Chai&logoColor=black)](https://www.chaijs.com/)
[![SuperTest](https://img.shields.io/badge/-SuperTest-07BA82?logoColor=white)](https://github.com/visionmedia/supertest)
[![Enquirer](https://img.shields.io/badge/-Enquirer-f0db4f?logoColor=white)](https://github.com/enquirer/enquirer)
[![Node-Mailer](https://img.shields.io/badge/-Node%20Mailer-89D05C?logo=gmail&logoColor=blue)](https://github.com/nodemailer/nodemailer)


#### Sample Email Report:
![email_report](https://user-images.githubusercontent.com/65847528/168474717-26236fd6-4f30-4cc0-bcb9-cf9ae0deadce.png)
