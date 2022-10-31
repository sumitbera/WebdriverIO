const Page = require("../pages/page");
const webTable = require("../../locators/webtable");
const CommonTest = require("../../utility/commontest");
const Constants = require('../../utility/appconstants');
const dataGenerator = require('../../utility/datagenerator');

class WebTablePage extends Page {
  get webTableOption() {
    return $(webTable.WEB_TABLE_OPTION);
  }

  get addBtn() {
    return $(webTable.ADD_BTN);
  }

  get firstName(){
    return $(webTable.FIRST_NAME);
  }

  get lastName(){
    return $(webTable.LAST_NAME);
  }

  get emailAddress(){
    return $(webTable.EMAIL);
  }

  get age(){
    return $(webTable.AGE);
  }

  get salary(){
    return $(webTable.SALARY);
  }

  get department(){
    return $(webTable.DEPARTMENT);
  }

  get submitBtn(){
    return $(webTable.SUBMIT_BTN);
  }

  async clickWebTableOption() {
    await expect(this.webTableOption).toBeEnabled();
    await CommonTest.doClick(this.webTableOption);
  }

  async clickAddBtn(){
    await expect(this.addBtn).toBeEnabled();
    await CommonTest.doClick(this.addBtn);
  }

  async enterFirstNameForRegistration(){
    await expect(this.firstName).toBeDisplayed();
    await CommonTest.doAddValue(this.firstName, Constants.FIRST_NAME);
  }

  async enterLastNameForRegistration(){
    await expect(this.lastName).toBeDisplayed();
    await CommonTest.doAddValue(this.lastName, Constants.LAST_NAME);
  }

  async enterYourEmailAddress(){
    await expect(this.emailAddress).toBeDisplayed();
    let email = dataGenerator.getRandomEmail("@xyz.com",10);
    console.log(email)
    await CommonTest.doAddValue(this.emailAddress, email);
  }

  async enterYourAge(){
    await expect(this.age).toBeDisplayed();
    await CommonTest.doAddValue(this.age, Constants.AGE);
  }

  async enterYourSalary(){
    await expect(this.salary).toBeDisplayed();
    await CommonTest.doAddValue(this.salary, Constants.SALARY);
  }

  async enterYourDepartment(){
    await expect(this.department).toBeDisplayed();
    await CommonTest.doAddValue(this.department, Constants.DEPARTMENT);
  }

  async clickSubmitBtn(){
    await expect(this.submitBtn).toBeDisplayed();
    await expect(this.submitBtn).toBeEnabled();
    await CommonTest.doClick(this.submitBtn);
  }

  async getListOfItemsFromTable() {
    const rowBefore = webTable.TABLE_ROW_BEFORE;
    const after = webTable.AFTER_TABLE;
    for (let i = 1; i <= 3; i++) {
     let xPath = rowBefore + i + after;
      let finalXPath = $(xPath)
      await CommonTest.doGetText(finalXPath)
    }
  }
}
module.exports = new WebTablePage();
