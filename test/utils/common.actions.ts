
import { browser } from '@wdio/globals';
import * as EC from 'wdio-wait-for';
import { ElementArray, Key } from 'webdriverio'
import { ChainablePromiseElement } from 'webdriverio';
import report from '@wdio/allure-reporter'
/**
 * The class contains a list of methods to perform different actions on some element(s).
 * @preferred
 */
export default class CommonActions {

    protected static readonly timeoutToElementAppears = 15000;

    /**
     * The method waits while an element become visible, scrolls to the element and then click on it.
    // * @param element A WDIO element(WebdriverIO.Element).
     * @returns Returns a promise that void will be returned when execution of the API done.
     */
    public static async clickElement(elementFinder: WebdriverIO.Element): Promise<void> {
        try {
            await (elementFinder).waitForExist({ timeout: CommonActions.timeoutToElementAppears });
            await elementFinder.scrollIntoView()
            await (elementFinder).waitForDisplayed({ timeout: CommonActions.timeoutToElementAppears });
            return await (elementFinder).click();
        }
        catch (e) {
            try {
                console.log(e);
                const tagName = await (elementFinder).getTagName();
                const text = await (elementFinder).getText();
                return console.log(`Element with tag ${tagName} and text "${text}" not clickable`);
            } catch (elementNotFounded) {
                return console.log(elementNotFounded);
            }
        }
    }
    public static async clickElementAllignToBottom(element: WebdriverIO.Element): Promise<void> {
        try {
            await (element).waitForExist({ timeout: CommonActions.timeoutToElementAppears });
            await browser.execute('arguments[0].scrollIntoView(false)', element);
            await element.scrollIntoView(false);
            await (element).waitForDisplayed({ timeout: CommonActions.timeoutToElementAppears });
            return await element.click();
        }
        catch (e) {
            try {
                console.log(e);
                const tagName = await element.getTagName();
                const text = await element.getText();
                return console.log(`Element with tag ${tagName} and text "${text}" not clickable`);
            } catch (elementNotFounded) {
                return console.log(elementNotFounded);
            }
        }
    }
    public static async clickElementNoScrolling(element: WebdriverIO.Element): Promise<void> {
        return await element.click();
    }
    public static async clickElementByExecuteScript(element: WebdriverIO.Element): Promise<void> {
        await browser.execute('arguments[0].scrollIntoView()', element);
        return await browser.execute('arguments[0].click()', element);
    }
    public static async clickElementByExecuteScriptNoScrolling(element: WebdriverIO.Element): Promise<void> {
        return await browser.execute('arguments[0].click()', element);
    }
    public static async clickWithMouseMoveElement(element: WebdriverIO.Element): Promise<void> {
        await browser.execute('arguments[0].scrollIntoView()', element);
        const origin = element
        return await browser.action('pointer')
            .move({ duration: 0, origin, x: 0, y: 0 }).pause(1000)
            .down({ button: 0 })
            .up({ button: 0 })
            .perform()

    }
    public static async clickWithCtrlAndMouseMoveElement(element: WebdriverIO.Element) {
        await browser.action('key')
            .down('\uE009')
            .pause(1000)
            .perform(true)
        const origin = element
        await browser.action('pointer')
            .move({ duration: 0, origin, x: 0, y: 0 }).pause(1000)
            .down({ button: 0 })
            .up({ button: 0 })
            .perform()
        await browser.action('key')
            .up('\uE009')
            .perform()
    }
    public static async clickWithCtrlElement(elementFinder: WebdriverIO.Element): Promise<void> {
        await browser.action('key')
            .down('\uE009')
            .pause(1000)
            .perform(true)
        await elementFinder.click()
        await browser.action('key')
            .up('\uE009')
            .perform()
    }

    public static async clickElementInArray(elementArrayFinder: WebdriverIO.ElementArray, elementIndex: number): Promise<void> {
        let elem: WebdriverIO.Element = await elementArrayFinder[elementIndex]
        return await this.clickElement(elem);
    }
    public static async clickWithCtrlElementInArray(elementArrayFinder: WebdriverIO.ElementArray, elementIndex: number): Promise<void> {
        let elem: WebdriverIO.Element = await elementArrayFinder[elementIndex];
        return await this.clickWithCtrlElement(elem);
    }
    public static async clickWithMouseMoveElementInArray(elementArrayFinder: WebdriverIO.ElementArray, elementIndex: number): Promise<void> {
        let elem: WebdriverIO.Element = await elementArrayFinder[elementIndex];
        return await this.clickWithMouseMoveElement(elem);
    }
    public static async clickWithCtrlAndMouseMoveElementInArray(elementArrayFinder: WebdriverIO.ElementArray, elementIndex: number) {
        let elem: WebdriverIO.Element = await elementArrayFinder[elementIndex];
        return await this.clickWithCtrlAndMouseMoveElement(elem);
    }
    public static async clickIfClickable(elementFinder: WebdriverIO.Element): Promise<boolean> {
        try {
            await elementFinder.click();
            return true;
        }
        catch (e) {
            try {
                const tagName = await elementFinder.getTagName();
                const text = await elementFinder.getText();
                console.log(`Element with tag ${tagName} and text "${text}" not clickable`);
                return false;
            } catch (elementNotFounded) {
                console.log(elementNotFounded);
                return false;
            }
        }
    }
    public static async clickWithCtrlIfClickable(element: WebdriverIO.Element): Promise<boolean> {
        try {
            await browser.action('key')
                .down('\uE009')
                .pause(1000)
                .perform(true)
            const origin = element
            await browser.action('pointer')
                .move({ duration: 0, origin, x: 0, y: 0 }).pause(1000)
                .down({ button: 0 })
                .up({ button: 0 })
                .perform()
            await browser.action('key')
                .up('\uE009')
                .perform()
            return true;
        }
        catch (e) {
            const tagName = await element.getTagName();
            const text = await element.getText();
            console.log(`Element with tag ${tagName} and text "${text}" not clickable`);
            return false;
        }
    }
    // public static inputClear(elementFinder: any): Promise<void> {
    //     return browser.executeScript('arguments[0].scrollIntoView()', elementFinder.getWebElement())
    //         .then(() => elementFinder.clear())
    //         .then(() => elementFinder.browser_.actions().sendKeys('1', Key.BACK_SPACE, Key.ENTER).perform());
    // }
    public static async inputClear(elementFinder: WebdriverIO.Element): Promise<void> {
        await browser.execute('arguments[0].scrollIntoView()', elementFinder);
        await browser.execute('arguments[0].value = ""', elementFinder);
        return await browser.execute(`arguments[0].dispatchEvent(new Event('input'));`, elementFinder);
    }

    public static async scrollToElement(elementFinder: WebdriverIO.Element, mode: boolean = false): Promise<{}> {
        // scroll to cell's element, because headears are unavailable to scroll
        return browser.execute(`arguments[0].scrollIntoView(${mode})`, elementFinder);
    }
    public static async scrollToRowElement(val: any, elementFinder: WebdriverIO.Element) {
        // scroll to cell's element, because headears are unavailable to scroll
        await browser.execute(`arguments[0].scroll(0,${val})`, elementFinder);
        await browser.pause(2000);
    }

    public static async scrollToElementCenter(elementFinder: WebdriverIO.Element, mode: boolean = false): Promise<{}> {
        return browser.execute(`arguments[0].scrollIntoView({block: 'center'})`, elementFinder);
    }

    public static async scrollToRight() {
        return browser.execute('window.scrollTo(0,document.body.scrollHeight)');
    }
    public static async scrollToTop() {
        return browser.execute('window.scrollTo(0,0)');
    }
    public static async scrollToElementWithOffset(elementFinder: WebdriverIO.Element, mode: boolean = false, offset: number = 100): Promise<{}> {
        // const pannelPage = new PannelPage();
        const scrollWindow = //await pannelPage.getActivePannelTabScrollWindow();

        await browser.execute(`arguments[0].scrollIntoView(${mode})`, elementFinder);
        const offsetSign: string = mode ? '-' : '+';
        return browser.execute(`arguments[0].scrollTop${offsetSign}=${offset};`, scrollWindow);
    }

    public static async moveMouseToElement(element: WebdriverIO.Element) {
        const origin = element
        return await browser.action('pointer')
            .move({ duration: 0, origin, x: 0, y: 0 }).perform()
    }

    public static async moveMouseToElementFromCorner(element: WebdriverIO.Element) {
        const origin = element
        return await browser.action('pointer')
            .move({ duration: 0, origin, x: 1, y: 1 }).perform()
    }

    public static async isElementDisplayed(elementFinder: WebdriverIO.Element) {
        // tslint:disable-next-line:no-magic-numbers
        await browser.pause(5000);
        const opacity = (await elementFinder.getCSSProperty('opacity')).value;
        if (opacity === '1') {
            return true;
        }
        else if (opacity === '0') {
            return false;
        }
        else {
            return undefined;
        }
    }

    public static async slowType(elementFinder: WebdriverIO.Element, keys: string, delay: number): Promise<void> {
        await elementFinder.click();
        const arrValue = [...keys]; // This is for converting string to charArray
        for (let i = 0; i < arrValue.length; i++) {
            await browser.keys(arrValue[i]);
            await browser.pause(delay);
        }
    }

    public static async getValueOfElement(elm: WebdriverIO.Element): Promise<WebdriverIO.Element> {
        return await browser.execute('return arguments[0].value', elm);
    }

    public static async checkIfElementDisabled(elm: WebdriverIO.Element): Promise<boolean> {
        const dis = await elm.getAttribute('disabled');
        if (dis === 'true') {
            return true;
        }
        else {
            return false;
        }
    }
    public static async clickWithShiftAndMouseMoveElementInArray(elementArrayFinder: WebdriverIO.Element, elementIndex: number) {
        let elem: WebdriverIO.Element = await elementArrayFinder[elementIndex];
        return await this.clickWithShiftAndMouseMoveElement(elem);
    }
    public static async clickWithShiftElementInArray(elementArrayFinder: WebdriverIO.Element, elementIndex: number): Promise<void> {
        let elem: WebdriverIO.Element = await elementArrayFinder[elementIndex]
        return await this.clickWithShiftElement(elem);
    }

    public static async clickWithShiftElement(elementFinder: WebdriverIO.Element): Promise<void> {
        await browser.action('key')
            .down('\uE008')
            .pause(1000)
            .perform(true)
        await elementFinder.click()
        await browser.action('key')
            .up('\uE008')
            .perform()
    }
    public static async clickWithShiftAndMouseMoveElement(element: WebdriverIO.Element) {
        await browser.action('key')
            .down('\uE008')
            .pause(1000)
            .perform(true)
        const origin = element
        await browser.action('pointer')
            .move({ duration: 0, origin, x: 0, y: 0 }).pause(1000)
            .down({ button: 0 })
            .up({ button: 0 })
            .perform()
        await browser.action('key')
            .up('\uE008')
            .perform()
    }
    public static async goBack(): Promise<void> {
        if (process.env.browserName === 'firefox') {
            await browser.execute('history.back()');
            await browser.pause(5000);
        } else {
            await browser.back();
        }
    }
    public static async reloadPage(): Promise<void> {
        if (process.env.browserName === 'firefox') {
            await browser.execute('location.reload()');
            await browser.pause(5000);
        } else {
            await browser.refresh();
        }
    }
    public static async enterWithShiftAndMouseMoveElementInArray(elementArrayFinder: WebdriverIO.ElementArray, elementIndex: number): Promise<void> {
        let elem: WebdriverIO.Element = elementArrayFinder[elementIndex]
        return await this.enterWithShiftAndMouseMoveElement(elem);
    }
    public static async enterWithShiftAndMouseMoveElement(elementFinder: WebdriverIO.Element): Promise<void> {
        await browser.action('key')
            .down('\uE008')
            .pause(1000)
            .perform(true)
        const origin = elementFinder
        await browser.action('pointer')
            .move({ duration: 0, origin, x: 1, y: 1 })
            .pause(1000)
            .down({ button: 0 })
            .up({ button: 0 })
            .perform()
        await browser.action('key')
            .up('\uE008')
            .perform()
    }
    public static async enterWithShiftElementInArray(elementArrayFinder: WebdriverIO.ElementArray, elementIndex: number): Promise<void> {
        let elem: WebdriverIO.Element = await elementArrayFinder[elementIndex];
        return await this.shiftAndEnterElement(elem);
    }
    public static async shiftAndEnterElement(elementFinder: WebdriverIO.Element): Promise<void> {
        //  await browser.keys("Shift");;
        //need to change to wdio
        // await elementFinder.browser_.actions().sendKeys(protractor.Key.SHIFT, protractor.Key.ENTER).perform();;
    }
    public static async enterWithCtrlElementInArray(elementArrayFinder: WebdriverIO.ElementArray, elementIndex: number): Promise<void> {
        let elem: WebdriverIO.Element = await elementArrayFinder[elementIndex];
        return await this.shiftAndEnterElement(elem);
    }
    public static async ctrlAndEnterElement(elementFinder: WebdriverIO.Element): Promise<void> {
        // await elementFinder.browser_.actions().sendKeys(protractor.Key.CONTROL, protractor.Key.ENTER).perform();;
        //need to change to wdio
    }
    public static async enterWithCtrlAndMouseMoveElementInArray(elementArrayFinder: WebdriverIO.ElementArray, elementIndex: number) {
        let elem: WebdriverIO.Element = await elementArrayFinder[elementIndex];
        return await this.enterWithCtrlAndMouseMoveElement(elem);
    }
    public static async enterWithCtrlAndMouseMoveElement(elementFinder: WebdriverIO.Element) {
        //need to change to wdio
        // return elementFinder.browser_.actions()
        //     .mouseMove(elementFinder, { x: 1, y: 1 }).sendKeys(protractor.Key.CONTROL, protractor.Key.ENTER).perform();
    }
    public static async selectDropdown(elements, value:string) {
        for (let i = 0; i < (await elements).length; i++) {
            const elem = await  elements[i].getAttribute('value');
            if (elem === value) {
                await elements[i].click()
                
                break;
            }
        }
    }
    
    public static async addLog (log:string) {
        await report.addStep(`STEP: ${log}`)
        await console.log(`STEP: ${log}`)
    }
    public static async enterInputValue(elem,textVal): Promise<void> {
        await elem.setValue(textVal)
        await this.addLog(`Entered value: ${textVal}`)
    }

}
