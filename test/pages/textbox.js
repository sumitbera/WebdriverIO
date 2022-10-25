const textBoxLocator = require('../../locators/textboxscreen')
const Page = require('./page')

class TextBoxScreen extends Page{

    get textBoxOption() {
        return $(textBoxLocator.TEXT_BOX_OPTION)
    }

    get fullName() {
        return $(textBoxLocator.FULL_NAME);
    }

    get email() {
        return $(textBoxLocator.EMAIL);
    }

    get currentAddress() {
        return $(textBoxLocator.CURRENT_ADDRESS);
    }

    get permanentAddress() {
        return $(textBoxLocator.PERMANENT_ADDRESS);
    }

    get submitBtn() {
        return $(textBoxLocator.SUBMIT_BTN);
    }

    async clickTextBoxOption(){
        await this.textBoxOption.click();
    }

    async enterFullName(){
        await this.fullName.addValue('Sumit Bera');
    }

    async enterEmailAddress(){
        await this.email.addValue('sumit_test@xyz.com');
    }

    async enterCurrentAddress(){
        await this.currentAddress.addValue('26 Coowarra Way, Berwik');
    }

    async enterPermanentAddress(){
        await this.permanentAddress.addValue('26 Coowarra Way, Berwik');
    }

    async clickSubmitBtn(){
        await this.submitBtn.click();
    }

    async scrollTillSubmitBtn(){
        await this.submitBtn.scrollIntoView();
    }
}

module.exports = new TextBoxScreen();