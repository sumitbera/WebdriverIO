const Page = require("../pages/page");
const CheckBoxScreen = require('../screens/checkbox');
const CommonTest = require('../../utility/CommonTest');

class CheckBoxPage extends Page{

    async clickCheckBoxOption(){
        await CommonTest.doClick(CheckBoxScreen.checkBoxOption);
    }

    async clickHomeCheckOption(){
        await CommonTest.doClick(CheckBoxScreen.homeCheckOption);
    }

    async clickToggleOption(){
        await CommonTest.doClick(CheckBoxScreen.toggleCheck);
    }
}

module.exports = new CheckBoxPage();