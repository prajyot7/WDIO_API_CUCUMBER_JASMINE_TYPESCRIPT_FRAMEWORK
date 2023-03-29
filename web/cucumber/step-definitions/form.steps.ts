import {Given, When, Then} from "@cucumber/cucumber"
import formdata from "../../resources/formdata.json"
import FrameworkConstants from "../../static/FrameworkConstants";
import CommonActions from "../../utils/common.actions";
import { FormPage } from "../../page-objects/form.page";
import { FileUtils, parseJsonFile } from "../../utils/fileutils";
let  formPage =new FormPage()
Given("I am on form page {string}", async(pageurl:string)=> {
    await browser.url(pageurl);
    await CommonActions.addLog(`Loading URL: ${pageurl}`)
    await browser.maximizeWindow();
    await CommonActions.addLog("Maximizing window")
})

When("I enter all mandate fields", async()=> {
    await formPage.setnames(formdata.firstname, formdata.lastname);
    await formPage.setEmail(formdata.email)
    await formPage.setMobileNumber(formdata.mobileno)
    await formPage.setSubject(formdata.subject)
})

When(/^I enter all mandate fields from (.+)$/, async(file:string)=> {
    let testdata = await parseJsonFile(FrameworkConstants.RESOURCE_FOLDER_PATH+file);
    await formPage.setnames(testdata.firstname, testdata.lastname);
    await formPage.setEmail(testdata.email)
    await formPage.setMobileNumber(testdata.mobileno)
    await formPage.setSubject(testdata.subject)
})