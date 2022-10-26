const Page = require("../pages/page");
const HomeScreen = require('../screens/home');
const CommonTest = require('../../utility/CommonTest');

class HomePage extends Page {

    async open() {
        await super.open('/');
    }

    async clickOnElementSection() {
        await CommonTest.doClick(HomeScreen.elementSection);
    }

    async scrollToElementSection() {
        await CommonTest.doScrollTillText(HomeScreen.elementSection);
    }

}
module.exports = new HomePage();