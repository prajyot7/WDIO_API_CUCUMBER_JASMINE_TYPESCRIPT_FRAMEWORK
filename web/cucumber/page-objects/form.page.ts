import CommonActions from "../../utils/common.actions"

export class FormPage {
     getFirstname() { return $("#firstName") }
     getLastname() { return $("#lastName") }
     getUseremail() { return $("#userEmail") }
     getMobile() { return $("#userNumber") }
     getSubject() { return $("#subjectsInput") }
     getaddress() { return $("#currentAddress") }

    async setnames(fname:string, lname:string) {
       await CommonActions.enterInputValue(this.getFirstname(), fname);
       await CommonActions.enterInputValue(this.getLastname(), lname);
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
    async setAddress(address){
        await CommonActions.enterInputValue(await this.getaddress(),address)
    }
}