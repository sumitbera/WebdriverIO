const homeLocators = require("../../locators/homescreen")

class HomeScreen{

    get elementSection() {
        return $(homeLocators.ELEMENT_SELECTION);
    }

    get selectionLabel() {
        return $(homeLocators.SELECTION_LABEL);
    }
}

module.exports = new HomeScreen();