const Page = require("../pages/page");
const checkboxLocator = require('../../locators/checkboxscreen');
const CommonTest = require('../../utility/commontest');

class CheckBoxPage extends Page{

    get checkBoxOption() {
        return $(checkboxLocator.CHECK_BOX_OPTION)
    }

    get homeCheckOption() {
        return $(checkboxLocator.HOME_CHECK_OPTION)
    }

    get homeSuccessLabel() {
        return $(checkboxLocator.HOME_SUCCESS_LABEL)
    }

    get toggleCheck() {
        return $(checkboxLocator.TOGGLE_CHECK)
    }
    
    async clickCheckBoxOption(){
        await CommonTest.doClick(this.checkBoxOption)
    }

    async clickHomeCheckOption(){
        await CommonTest.doClick(this.homeCheckOption)
    }

    async clickToggleOption(){
        await CommonTest.doClick(this.toggleCheck)
    }
}

module.exports = new CheckBoxPage()