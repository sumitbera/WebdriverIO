const Page = require("../pages/page");
const homeLocators = require("../../locators/homescreen")
const CommonTest = require('../../utility/commontest');

class HomePage extends Page {

    get elementSection() {
        return $(homeLocators.ELEMENT_SELECTION)
    }

    get selectionLabel() {
        return $(homeLocators.SELECTION_LABEL)
    }

    async open() {
        super.open('/')
    }

    async clickOnElementSection() {
        await CommonTest.doClick(this.elementSection)
    }

    async scrollToElementSection() {
        await CommonTest.doScrollTillText(this.elementSection)
    }

}
module.exports = new HomePage()