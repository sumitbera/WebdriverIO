const Page = require("../pages/page");
const webTable = require("../../locators/webtable");
const CommonTest = require("../../utility/commontest");

class WebTablePage extends Page {
  get webTableOption() {
    return $(webTable.WEB_TABLE_OPTION);
  }

  get addBtn() {
    return $(webTable.ADD_BTN);
  }

  async clickWebTableOption() {
    await expect(this.webTableOption).toBeEnabled();
    await CommonTest.doClick(this.webTableOption);
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
