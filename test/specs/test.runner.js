const homePage = require("../pages/home")
const textBoxPage = require("../pages/textbox")
const checkBoxPage = require("../pages/checkbox")

describe("interaction with web element", () => {

    it("Search Elements", async () => {
        await homePage.open();
        await expect(browser).toHaveUrlContaining('demo');
        await browser.pause(1000)
        await homePage.scrollToElementSection();
        await homePage.clickOnElementSection();
    });

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
