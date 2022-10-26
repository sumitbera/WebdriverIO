const checkboxLocator = require('../../locators/checkboxscreen')
const Page = require('../pages/page')

class CheckBoxScreen extends Page{

    get checkBoxOption() {
        return $(checkboxLocator.CHECK_BOX_OPTION);
    }

    get homeCheckOption() {
        return $(checkboxLocator.HOME_CHECK_OPTION);
    }

    get homeSuccessLabel() {
        return $(checkboxLocator.HOME_SUCCESS_LABEL);
    }

    get toggleCheck() {
        return $(checkboxLocator.TOGGLE_CHECK);
    }

    async clickCheckBoxOption(){
        await this.checkBoxOption.click();
    }

    async clickHomeCheckOption(){
        await this.homeCheckOption.click();
    }

    async clickToggleOption(){
        await this.toggleCheck.click();
    }

}
module.exports = new CheckBoxScreen();