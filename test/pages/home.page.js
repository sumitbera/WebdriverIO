const Page = require("../pages/page");
const homeLocators = require("../../locators/homescreen")
const CommonTest = require('../../utility/commontest');
const Constants = require('../../utility/appconstants');

class HomePage extends Page {

    get elementSection() {
        return $(homeLocators.ELEMENT_SELECTION)
    }

    get selectionLabel() {
        return $(homeLocators.SELECTION_LABEL)
    }

    async open() {
        super.open('/')
        await expect(browser).toHaveUrlContaining(Constants.LINK_TEXT)
    }

    async clickOnElementSection() {
        await CommonTest.doClick(this.elementSection)
    }

    async scrollToElementSection() {
        await CommonTest.doScrollTillText(this.elementSection)
        await expect(this.elementSection).toBeDisplayed()
    }

}
module.exports = new HomePage()