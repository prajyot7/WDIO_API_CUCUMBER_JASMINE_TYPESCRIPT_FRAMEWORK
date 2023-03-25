import CommonActions from './common.actions';

export class TabsUtil {
  public async openPageInNewTab(url: string) {
    await this.createNewBrowserTab();
    await this.switchToTabNumber(1);
    await browser.pause(300)
    await browser.url(url);
  }

  public async createNewBrowserTab() {
    await browser.execute('window.open()');
  }
  public async selectOption(itemName:string){
        return CommonActions.clickElement(await $(`//span[contains(text(),'${itemName}')]`));
  }

  public async switchToTabNumber(number: number) {
    return await browser.getWindowHandles().then(async function (handles) {
      await browser.pause(300)
      const newWindowHandle = handles[number];
      await browser.pause(300)
      await browser.switchToWindow(newWindowHandle);
    });
  }
  public async switchToMainTab() {
    return browser.getWindowHandles().then((handles) => {
      browser.switchToWindow(handles[1]);
      browser.closeWindow();
      browser.switchToWindow(handles[0]);
    });
  }
  public getInputTextboxElement(textboxId: string) {
    return $(`//td[contains(text(),"${textboxId}")]/following::td[1]/input`);
}
public getbuttonElement(textboxId: string) {
  return $(`//button//span[contains(text(),"${textboxId}")]`);
}
}