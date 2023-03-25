import{browser, $} from '@wdio/globals'
import{getValue} from '@wdio/shared-store-service';
export class LoginPage{
    async openBrowser(){
        await browser.maximizeWindow();
        let hostname = await (await getValue('hostname')).toString();
        let url = await (await getValue('url')).toString();
        console.log('hostname : '+ hostname)
        console.log('url : '+ url)
        await browser.url(hostname + url);
        // await browser.url('https://the-internet.herokuapp.com/login')
    }

    async login(username: string, password: string) {
        let hostname = await (await getValue('hostname')).toString();
        let url = await (await getValue('url')).toString();
        await browser.url(hostname + url);
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
    async getuserNameInput() {
        return await $('#username');
    }
    async getuserPasswordnput() {
        return await $('#password') 
    }
    async getSignInButton() {
        return await $('button[type="submit"]') ;
    }
    async getflashAlert() { 
        return await $('#flash') 
    }
    // async getflashSuccessAlert(text:string) { 
    //     return await $(`//div[@class='flash success' and contains(text(),'${text}')]`) 
    // }
    // async getflashErrorAlert(text:string) { 
    //     return await $(`//div[@class='flash error' and contains(text(),'${text}')]`) 
    // }
    async getflashAlertText() { 
        return await $('#flash').getText();
    }
    async getflashAlertTextValue(elem: WebdriverIO.Element) { 
        return await elem.getText();
    }
    async getflashSuccessAlert(text?:string) { 
        return await $(`div.flash.success`) 
    }
    async getflashErrorAlert(text?:string) { 
        return await $(`div.flash.error`)
    }
    async getLogoutButton(){
        return await $(`a.button.secondary.radius`)
    }
}


