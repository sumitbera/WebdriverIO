const homePage = require("../pages/home.page");
const textBoxPage = require("../pages/textbox.page");
const checkBoxPage = require("../pages/checkbox.page");
const webTablePage = require("../pages/webtable.page");

describe("interaction with web element", () => {
  before("Launch ToolsQA application", async () => {
    await homePage.open();
    await browser.pause(1000);
  });

  it("Click Element Section", async () => {
    await homePage.scrollToElementSection();
    await homePage.clickOnElementSection();
    await browser.pause(1000);
  });

  it("Enter value in Text box", async () => {
    await browser.pause(1000);
    await textBoxPage.clickTextBoxOption();
    await textBoxPage.enterFullName();
    await textBoxPage.enterEmailAddress();
    await textBoxPage.enterCurrentAddress();
    await textBoxPage.enterPermanentAddress();
    await textBoxPage.scrollTillSubmitBtn();
    await textBoxPage.clickSubmitBtn();
  });

  it("Select checkbox options", async () => {
    await browser.pause(1000);
    await checkBoxPage.clickCheckBoxOption();
    await checkBoxPage.clickHomeCheckOption();
    await checkBoxPage.clickToggleOption();
  });

  it("Fetch data from web table", async () => {
    await browser.pause(1000);
    await webTablePage.clickWebTableOption();
    await webTablePage.getListOfItemsFromTable();
  });

  it("Enter registration details", async () => {
    await browser.pause(1000);
    await webTablePage.clickAddBtn();
    await webTablePage.enterFirstNameForRegistration();
    await webTablePage.enterLastNameForRegistration();
    await webTablePage.enterYourEmailAddress();
    await webTablePage.enterYourAge();
    await webTablePage.enterYourSalary();
    await webTablePage.enterYourDepartment();
    await webTablePage.clickSubmitBtn();
    await browser.pause(5000);
  });
});
