const Page = require("../pages/page");
const TextBoxScreen = require('../screens/textbox');
const CommonTest = require('../../utility/CommonTest');

class TextBoxPage extends Page{

    async clickTextBoxOption(){
        await CommonTest.doClick(TextBoxScreen.textBoxOption);
    }

    async enterFullName(){
        await CommonTest.doAddValue(TextBoxScreen.fullName,'Sumit Bera');
    }

    async enterEmailAddress(){
        await CommonTest.doAddValue(TextBoxScreen.email,'sumit_test@xyz.com');
    }

    async enterCurrentAddress(){
        await CommonTest.doAddValue(TextBoxScreen.currentAddress,'26 Coowarra Way, Berwik');
    }

    async enterPermanentAddress(){
        await CommonTest.doAddValue(TextBoxScreen.permanentAddress,'26 Coowarra Way, Berwik');
    }

    async clickSubmitBtn(){
        await CommonTest.doClick(TextBoxScreen.submitBtn);
    }

    async scrollTillSubmitBtn(){
        await CommonTest.doScrollTillText(TextBoxScreen.submitBtn);
    } 
}

module.exports = new TextBoxPage();