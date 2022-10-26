const textBoxLocator = require('../../locators/textboxscreen')
const Page = require('../pages/page')

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
}

module.exports = new TextBoxScreen();