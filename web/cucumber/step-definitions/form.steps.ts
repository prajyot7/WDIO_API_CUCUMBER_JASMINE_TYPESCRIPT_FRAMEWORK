import {Given, When, Then} from "@cucumber/cucumber"
import formdata from "../../resources/formdata.json"
import FrameworkConstants from "../../static/FrameworkConstants";
import CommonActions from "../../utils/common.actions";
import { FormPage } from "../../cucumber/page-objects/form.page";
import { FileUtils, parseJsonFile } from "../../utils/fileutils";
const path = require('path');
let  formPage =new FormPage()
Given("user is on form page {string}", async(pageurl:string)=> {
    await browser.url(pageurl);
    await CommonActions.addLog(`Loading URL: ${pageurl}`)
    await browser.maximizeWindow();
    await CommonActions.addLog("Maximizing window")
})

When("enter all mandate fields", async()=> {
    await formPage.setnames(formdata.firstname, formdata.lastname);
    await formPage.setEmail(formdata.email)
    await formPage.setMobileNumber(formdata.mobileno)
    await formPage.setSubject(formdata.subject)
})