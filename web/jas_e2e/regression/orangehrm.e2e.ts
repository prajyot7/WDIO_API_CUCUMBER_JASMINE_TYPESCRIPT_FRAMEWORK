import { getValue } from "@wdio/shared-store-service";
import { OrangeHRMPage } from '../page-objects/orangehrm.page'
const orangeHrmPage = new OrangeHRMPage()
describe('Orange HRM feature', () => {

    it("should validate smoke test", async () => {   
        await orangeHrmPage.login('Admin', 'admin123')
        await (await orangeHrmPage.getTitleElem()).waitForDisplayed({timeout: Number(await getValue('dialogWaitTimeout'))})
        expect(await orangeHrmPage.getTitleText()).toBe('Dashboard'); 
        await orangeHrmPage.Logout();   
        await (await orangeHrmPage.getLoginTitleElem()).waitForDisplayed({timeout: Number(await getValue('dialogWaitTimeout'))})
        expect(await orangeHrmPage.getLoginTitleText()).toBe('Login');
    });
    it("should validate invalis password smoke test", async () => {
        await orangeHrmPage.login('Admin', 'admin12345')
        await (await orangeHrmPage.getLoginTitleElem()).waitForDisplayed({timeout: Number(await getValue('dialogWaitTimeout'))})
        expect(await (await orangeHrmPage.getAlert()).isExisting()).toBe(true);
        expect(await orangeHrmPage.getAlertText()).toContain('Invalid credentials');
   });
    it("should validate invalid username smoke test", async () => {
        await orangeHrmPage.login('abcdd', 'admin123')
        await (await orangeHrmPage.getLoginTitleElem()).waitForDisplayed({timeout: Number(await getValue('dialogWaitTimeout'))})
        expect(await (await orangeHrmPage.getAlert()).isExisting()).toBe(true);
        expect(await orangeHrmPage.getAlertText()).toContain('Invalid credentials');
   });
});