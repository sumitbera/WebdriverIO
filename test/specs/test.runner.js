const homePage = require('../pages/home.page');
const textBoxPage = require('../pages/textbox.page');
const checkBoxPage = require('../pages/checkbox.page');

describe("interaction with web element", () => {

    before('Launch ToolsQA application', async () => {
        await homePage.open()
        await browser.pause(1000)
    })

    it("Search Elements", async () => {
        await homePage.scrollToElementSection()
        await homePage.clickOnElementSection()
        await browser.pause(1000)
    })

    it("Enter value in Text box", async () => {
        await browser.pause(1000)
        await textBoxPage.clickTextBoxOption();
        await textBoxPage.enterFullName();
        await textBoxPage.enterEmailAddress();
        await textBoxPage.enterCurrentAddress();
        await textBoxPage.enterPermanentAddress();
        await textBoxPage.scrollTillSubmitBtn();
        await textBoxPage.clickSubmitBtn();
    })

    it("Select checkbox options", async () => {
        await browser.pause(1000);
        await checkBoxPage.clickCheckBoxOption();
        await checkBoxPage.clickHomeCheckOption();
        await checkBoxPage.clickToggleOption();
    })
});
