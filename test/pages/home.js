const homeLocators = require("../../locators/homescreen.js")
const Page = require('./page')

class HomeScreen extends Page{

    async open(){
        await super.open('/')
    }

    get elementSection() {
        return $(homeLocators.ELEMENT_SELECTION);
    }

    get selectionLabel() {
        return $(homeLocators.SELECTION_LABEL);
    }

    async clickOnElementSection(){
        await this.elementSection.click();
    }

    async scrollToElementSection(){
        await this.elementSection.scrollIntoView();
    }

}
module.exports = new HomeScreen();