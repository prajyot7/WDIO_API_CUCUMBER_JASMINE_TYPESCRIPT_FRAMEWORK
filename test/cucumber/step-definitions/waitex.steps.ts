import { Given, When, Then } from '@cucumber/cucumber'
import { LoginPage } from '../../page-objects/login.page';
import {WaitEx} from "../../page-objects/waitex.page"
import CommonActions from '../../utils/common.actions';
let waitexPage =new WaitEx();
Given(/^I am on dynamic loading (.+) page$/, async (appurl: string) => {
    CommonActions.addLog("Maximizing window")
    await browser.url(appurl)
    CommonActions.addLog(`Loading URL: ${appurl}`)
});

When(/^I click on start button$/, async () => {
    await waitexPage.clickOnStartButton()
});

Then(/^I validate loading icon$/, async () => {
    await waitexPage.waitForLoadingIcon();
    await waitexPage.waitForLoadingIconToDisappear();
    await waitexPage.waitForMessage();
    await browser.waitUntil(async () =>
        await waitexPage.getMsg().getText() === 'Hello World!',
        {
            timeout: 10000,
            timeoutMsg: "Element is not displayed in 10 sec"
        })
    expect(await (await waitexPage.getMsg()).isDisplayed()).toBe(true)
})