const Page = require("../pages/page");
const TextBoxScreen = require('../screens/textbox');
const CommonTest = require('../../utility/commontest');
const Constants = require('../../utility/appconstants');

class TextBoxPage extends Page {

    async clickTextBoxOption() {
        await CommonTest.doClick(TextBoxScreen.textBoxOption);
    }

    async enterFullName() {
        await CommonTest.doAddValue(TextBoxScreen.fullName, Constants.FULL_NAME);
    }

    async enterEmailAddress() {
        await CommonTest.doAddValue(TextBoxScreen.email, Constants.EMAIL_ADDRESS);
    }

    async enterCurrentAddress() {
        await CommonTest.doAddValue(TextBoxScreen.currentAddress, Constants.ADDRESS);
    }

    async enterPermanentAddress() {
        await CommonTest.doAddValue(TextBoxScreen.permanentAddress, Constants.ADDRESS);
    }

    async clickSubmitBtn() {
        await CommonTest.doClick(TextBoxScreen.submitBtn);
    }

    async scrollTillSubmitBtn() {
        await CommonTest.doScrollTillText(TextBoxScreen.submitBtn);
    }
}

module.exports = new TextBoxPage();