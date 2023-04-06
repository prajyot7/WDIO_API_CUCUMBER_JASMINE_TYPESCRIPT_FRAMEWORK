import { LoginPage } from "../page-objects/login.page";
import FrameworkConstants from '../../static/FrameworkConstants';
import { herokuappLoginData } from '../../resources/logindata';
import { browser} from '@wdio/globals';
import { getValue } from "@wdio/shared-store-service";
const loginPage = new LoginPage()
describe('Login feature', () => {

    it("verify successful login", async () => {
        await loginPage.login(herokuappLoginData.validUserName, herokuappLoginData.validPassword())
        await (await loginPage.getflashAlert()).waitForDisplayed({timeout: Number(await getValue('dialogWaitTimeout'))})
        expect(await (await loginPage.getflashAlert()).isExisting()).toBe(true);
        expect(await loginPage.getflashAlertTextValue(await loginPage.getflashSuccessAlert(FrameworkConstants.LOGIN_SUCCESS_MSG))).toContain(FrameworkConstants.LOGIN_SUCCESS_MSG);
    });
    it("verify invlid password error message", async () => {
        await loginPage.login(herokuappLoginData.validUserName, herokuappLoginData.invalidPassword)
        await (await loginPage.getflashAlert()).waitForDisplayed({timeout: Number(await getValue('dialogWaitTimeout'))})
        expect(await (await loginPage.getflashAlert()).isExisting()).toBe(true);
        expect(await loginPage.getflashAlertTextValue(await loginPage.getflashErrorAlert(FrameworkConstants.LOGIN_FAILED_PassMSG))).toContain(FrameworkConstants.LOGIN_FAILED_PassMSG);
    });
    it("verify invalid username error message", async () => {
        await loginPage.login('abcdd', herokuappLoginData.validPassword())
        await (await loginPage.getflashAlert()).waitForDisplayed({timeout: Number(await getValue('dialogWaitTimeout'))})
        expect(await (await loginPage.getflashAlert()).isExisting()).toBe(true);
        expect(await loginPage.getflashAlertTextValue(await loginPage.getflashErrorAlert(FrameworkConstants.LOGIN_FAILED_UserMSG))).toContain(FrameworkConstants.LOGIN_FAILED_UserMSG);
    });
    it("verify invalid username error message", async () => {
        await loginPage.login('abcdd', herokuappLoginData.validPassword())
        await (await loginPage.getflashAlert()).waitForDisplayed({timeout: Number(await getValue('dialogWaitTimeout'))})
        expect(await (await loginPage.getflashAlert()).isExisting()).toBe(true);
        expect(await loginPage.getflashAlertTextValue(await loginPage.getflashErrorAlert(FrameworkConstants.LOGIN_FAILED_UserMSG))).toContain("You username is invalid!");
    });
});
