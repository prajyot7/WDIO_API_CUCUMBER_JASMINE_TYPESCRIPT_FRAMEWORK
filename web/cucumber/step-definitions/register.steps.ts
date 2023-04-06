import { Given, When, Then } from '@cucumber/cucumber'
import {ChaiRegister} from '../../cucumber/page-objects/register.page'
import CommonActions from '../../utils/common.actions';
let chaiPage = new ChaiRegister();
Given(/^user is on practice page \"([^\"]*)\"$/, async (appurl: string) => {
    await browser.maximizeWindow()
    CommonActions.addLog('Maximizing window')
    await browser.url(appurl)
    CommonActions.addLog('loading URL: ' + appurl)
});

Then(/^page header text is \"([^\"]*)\"$/, async (header: string) => {
    expect(chaiPage.getheader()).toHaveText(header)
});

When(/^enter firstname (.+) and lastname (.+)$/, async (fname: string, lname: string) => {
    await chaiPage.enterFirstName(fname)
    await chaiPage.enterLastName(lname)
});

When(/^select gender (.+) years (.+) favorite chai (.+) and reason (.+)$/, async (gender: string, yrs: string, favchai: string, reason: string) => {
    await chaiPage.selectGender(gender)
    await chaiPage.selectExperience(yrs)
    await chaiPage.selectFavChai(favchai)
    await chaiPage.selectReason(reason)
});

When(/^select continent (.+) and commands (.+)$/, async (continent: string, command: string) => {
    await chaiPage.selectContinent(continent)
    await chaiPage.selectSeleniumCommand(command)
});

When(/^click on submit button$/, async () => {
    await chaiPage.clickOnSubmitBtn()
});
