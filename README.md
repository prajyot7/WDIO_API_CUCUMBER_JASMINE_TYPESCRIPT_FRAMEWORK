<h2 align="center"> Web and API Test Automation Framework </h2>

#### Requirements

[![NodeJs](https://img.shields.io/badge/-NodeJS%20v12%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![Java](https://img.shields.io/badge/-JDK-%23007396?logo=java&logoColor=black&)](https://www.oracle.com/java/technologies/downloads/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

#### Clone Repository

```bash
1. git clone https://github.com/prajyot7/WDIO_API_CUCUMBER_JASMINE_TYPESCRIPT_FRAMEWORK.git
2. Navigate to `WDIO_API_CUCUMBER_JASMINE_TYPESCRIPT_FRAMEWORK`

```

---

Install Enquirer

```bash
npm i enquirer --save-dev 
```

### Interactive CLI to run test:

```bash
npm start

```

It start wizard with test module options, based on user selection either of the below module will start locally or inside docker container. Code to control wizard and user selection is available in 'start.js' which is built using [enquirer](https://www.npmjs.com/package/enquirer) node package.
Test Module Options :  | UI | API | 
![cli_demo](https://user-images.githubusercontent.com/25434538/228750961-11c2c2ac-37ae-40bb-b68c-3ffd572bea61.gif)

---

### Web Test

Install dependencies:

> Navigate to "web" folder and then run below command

```bash
npm install --legacy-peer-deps

```

```bash
npm run wdio:test             [ Jasmine tests ]
npm run wdio_cuc_su:run     [ Cucumber BDD tests ]

```

Generate Report:

```bash
For Both Jasmine and Cucumber use one Report generate
npm run allure:generate 

```

Open Report :

```bash
For Both Jasmine and Cucumber use one Report Open
npm run allure:open 

```

---

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

Generate Report:

```bash
For Both Jasmine and Cucumber use one Report generate
npm run allure:generate 

```

Open Report :

```bash
For Both Jasmine and Cucumber use one Report Open
npm run allure:open 

```

---

#### Features:

    - Web and API Testing
    - Jasmine and Cucumber BDD framework
    - Page Object Design pattern
    - Parallel execution
    - Cross browser testing
    - Retry failed test
    - Screenshot in report for failed tests
    - Github actions
    - Use of types for method params optimization
    - Improved import statement using tsconfig path

#### Tech stacks:

[![WebdriverIO](https://img.shields.io/badge/-WebdriverI/O-EA5906?logo=WebdriverIO&logoColor=white)](https://webdriver.io/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?logo=Typescript&logoColor=black)](https://www.typescriptlang.org/)
[![Jasmine](https://img.shields.io/badge/-Jasmine-%238D6748?logo=Jasmine&logoColor=white)](https://Jasminejs.org/)
[![CucumberIO](https://img.shields.io/badge/-Cucumber.io-brightgreen?logo=cucumber&logoColor=white)](https://cucumber.io/)
[![Enquirer](https://img.shields.io/badge/-Enquirer-f0db4f?logoColor=white)](https://github.com/enquirer/enquirer)

#### Folder Structure:

![e2e_framework_folders]("https://user-images.githubusercontent.com/25434538/228564778-0615d317-31d4-4e81-8982-5de3b9b9f90d.png")
