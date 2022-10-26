class CommonTest {

    async doClick(element) {
        await element.waitForDisplayed()
        await element.click()
    }

    async doAddValue(element, value) {
        await element.waitForDisplayed({ timeout: 3000 });
        await element.addValue(value)
    }

    async doGetText(element) {
        await element.waitForDisplayed({ timeout: 3000 });
        return element.getText();
    }

    async doScrollTillText(element) {
        await element.waitForDisplayed({ timeout: 3000 });
        await element.scrollIntoView();
    }

    async doVerifyElementIsVisible(element) {
        await element.waitForDisplayed({ timeout: 3000 });
        console.log("Element visible:" + element)
    }
}

module.exports = new CommonTest()