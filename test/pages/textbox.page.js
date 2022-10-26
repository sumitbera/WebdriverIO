const Page = require("../pages/page");
const textBoxLocator = require('../../locators/textboxscreen');
const CommonTest = require('../../utility/commontest');
const Constants = require('../../utility/appconstants');

class TextBoxPage extends Page {

    get textBoxOption() {
        return $(textBoxLocator.TEXT_BOX_OPTION)
    }

    get fullName() {
        return $(textBoxLocator.FULL_NAME)
    }

    get email() {
        return $(textBoxLocator.EMAIL)
    }

    get currentAddress() {
        return $(textBoxLocator.CURRENT_ADDRESS)
    }

    get permanentAddress() {
        return $(textBoxLocator.PERMANENT_ADDRESS)
    }

    get submitBtn() {
        return $(textBoxLocator.SUBMIT_BTN)
    }

    async clickTextBoxOption() {
        await CommonTest.doClick(this.textBoxOption)
    }

    async enterFullName() {
        await CommonTest.doAddValue(this.fullName, Constants.FULL_NAME)
    }

    async enterEmailAddress() {
        await CommonTest.doAddValue(this.email, Constants.EMAIL_ADDRESS)
    }

    async enterCurrentAddress() {
        await CommonTest.doAddValue(this.currentAddress, Constants.ADDRESS)
    }

    async enterPermanentAddress() {
        await CommonTest.doAddValue(this.permanentAddress, Constants.ADDRESS)
    }

    async clickSubmitBtn() {
        await CommonTest.doClick(this.submitBtn)
    }

    async scrollTillSubmitBtn() {
        await CommonTest.doScrollTillText(this.submitBtn)
    }
}

module.exports = new TextBoxPage()