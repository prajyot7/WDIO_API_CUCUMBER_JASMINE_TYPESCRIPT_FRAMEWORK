import CommonActions from '../../utils/common.actions';
export class ChaiRegister {
     getheader() { return $(".main-header"); }
     getfname() { return $('#firstName') }
     getlname() { return $('#lastName') }
     getGender_radio(gender) { return $(`//label[contains(text(),'${gender}')]/../input[@name='gender']`) }
     getHobbyCheckBox(hobby){ return $(`//label[contains(text(),'${hobby}')]/../input[@type='checkbox']`)}
     getExperience_radio() { return $$('[name=exp]') }
     getFavchai_checkbox() { return $$('input[name*=Tea]') }
     getWhychai_checkbox() { return $$('[name=tool]') }
     getContinent_dropdown() { return $('#continents') }
     getSelCommands_multiselect() { return $('#selenium_commands') }
     getSubmit_btn() { return $('#submit') }
     getUseremail() { return $("#userEmail") }
     getMobile() { return $("#userNumber") }
     getSubject() { return $("#subjectsInput") }
     getaddress() { return $("#currentAddress") }
    
     

    async enterFirstName(firstname:string) {
        await (await this.getfname()).setValue(firstname);
    }

    async enterLastName(lastname:string) {
        await this.getlname().setValue(lastname);
    }

    async selectGender(gender: string) {
        await CommonActions.clickElement(await this.getGender_radio(gender));
    }

    async selectExperience(years: string) {
        await CommonActions.selectDropdown(await this.getExperience_radio(),years);
    }

    async selectFavChai(chaiType: string) {
        await CommonActions.selectDropdown(await this.getFavchai_checkbox(),chaiType);
    }

    async selectReason(reason:string) {
        await CommonActions.selectDropdown(await this.getWhychai_checkbox(),reason);
    }

    async selectContinent(continent:string) {
        await CommonActions.selectDropdown(await this.getContinent_dropdown(),continent);
    }

    async selectSeleniumCommand(command:string) {
        await CommonActions.selectDropdown(await this.getSelCommands_multiselect(),command);
    }

    async clickOnSubmitBtn() {
        await CommonActions.clickElement(await this.getSubmit_btn());
    }
    async setEmail(email:string) {
        await CommonActions.enterInputValue(this.getUseremail(), email)
    }

    async setSubject(subject:string) {
        await CommonActions.enterInputValue(this.getSubject(), subject);
    }

    async setMobileNumber(mobnum:string) {
        await CommonActions.enterInputValue(this.getMobile(), mobnum);
    }
    

}