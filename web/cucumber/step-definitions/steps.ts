import { Given, When, Then } from '@wdio/cucumber-framework';
import {LoginPage} from '../../cucumber/page-objects/login.page';
import CommonActions from '../../utils/common.actions';
import { getValue } from '@wdio/shared-store-service';
const loginPage = new LoginPage();


Given(/^user is on the (\w+) page$/, async (page) => {
    await loginPage.openBrowser()
});
Given(/^I open the browser and load the url (.+)$/, async (homepageurl: string) => {
    await loginPage.openBrowser()
    await browser.url(homepageurl)
    CommonActions.addLog(`Loading URL: ${homepageurl}`)
    await browser.maximizeWindow()
    CommonActions.addLog("Maximizing window")
});
When(/^enter (\w+) and (.+)$/, async (username, password) => {
    await loginPage.login(username, password)
});

Then(/^validate flash message (.*)$/, async (message) => {
    expect(await (await loginPage.getflashAlert()).isExisting()).toBe(true);
    expect(await loginPage.getflashAlertText()).toContain(message);
});


