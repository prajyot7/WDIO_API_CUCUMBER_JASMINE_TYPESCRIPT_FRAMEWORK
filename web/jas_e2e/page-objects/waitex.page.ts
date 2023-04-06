import CommonActions from "../../utils/common.actions"

export class WaitEx {

    getStartBtn() { return $('#start button') }
    getLoadingIco() { return $('#loading') }
    getMsg() { return $('#finish h4') }

    async clickOnStartButton() {
        await CommonActions.clickElement(await this.getStartBtn())
    }

    async waitForLoadingIcon() {
        await this.getLoadingIco().waitForDisplayed({ timeout: 5000, timeoutMsg: 'Failed while waiting for loading icon' })
        
    }

    async waitForLoadingIconToDisappear() {
        await this.getLoadingIco().waitForDisplayed({ reverse: true, timeout: 10000 })
    }

    async waitForMessage() {
        await this.getMsg().waitForDisplayed({ timeout: 10000 })
    }

}
