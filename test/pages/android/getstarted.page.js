const Page = require("../page");
const getStartedLocator = require("../../../locators/mobile/getstarted");
const CommonTest = require("../../../utility/commontest");
class GetStarted extends Page {
  
  get getStartedBtn() {
    return $(getStartedLocator.GET_STARTED_BTN);
  }

  async clickGetStartedBtn() {
    await expect(this.getStartedBtn).toBeDisplayed();
    console.log("Get started button visible");
    await expect(this.getStartedBtn).toBeClickable();
    await CommonTest.doClick(this.getStartedBtn);
    console.log("Get Started button clicked");
  }
}
module.exports = new GetStarted();
