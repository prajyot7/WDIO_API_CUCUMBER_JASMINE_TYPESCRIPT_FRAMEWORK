import{browser, $} from '@wdio/globals'
import{getValue} from '@wdio/shared-store-service';
export class OrangeHRMPage{
    async getuserNameInput() {
        return await $(`input[name='username']`);
    }
    async getuserPasswordnput() {
        return await $(`input[name='password']`) 
    }
    async getSignInButton() {
        return await $('button[type="submit"]') ;
    }
    async login(username: string, password: string) {
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // await browser.url('https://the-internet.herokuapp.com/login');
        return await this.relogin(username,password)
        
    }
    async relogin(username:string,password:string){
        let userNameInput= await this.getuserNameInput()
        let userPasswordInput= await this.getuserPasswordnput()
        let signinButton = await this.getSignInButton()
        await (userNameInput).waitForDisplayed({timeout:Number(await getValue('browserWaitTimeout'))})
        await (userPasswordInput).waitForDisplayed({timeout:Number(await getValue('browserWaitTimeout'))})
        await (signinButton).waitForDisplayed({timeout:Number(await getValue('browserWaitTimeout'))})
        await userNameInput.clearValue();
        await userNameInput.setValue(username);
        await userPasswordInput.clearValue();
        await userPasswordInput.setValue(password);
        await signinButton.click();
    }
    async getTitleElem(){
        return await $(`.oxd-topbar-header-title`)
    }
    async getTitleText(){
        return await (await this.getTitleElem()).getText()
    }
    async getLoginTitleElem(){
        return await $(`h5`)
    }
    async getLoginTitleText(){
        return await (await this.getLoginTitleElem()).getText()
    }
    async getAlert() { 
        return await $('.oxd-alert-content') 
    }
    async getAlertText() { 
        return await (await this.getAlert()).getText();
    }
    async Logout(){
        await(await $(`.oxd-userdropdown-icon`)).click();
        await browser.pause(3000)
        await(await $(`//a[@href='/web/index.php/auth/logout']`)).click();
    }
}