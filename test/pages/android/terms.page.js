const Page = require("../page");
const termsLocator = require("../../../locators/mobile/terms");
const CommonTest = require("../../../utility/commontest");

class Terms extends Page {
  get termsLabel() {
    return $(termsLocator.TERMS_LABEL);
  }

  get agreeBtn() {
    return $(termsLocator.AGREE_BTN);
  }

  async verifyTermsAndConditionLabel() {
    await expect(this.termsLabel).toBeDisplayed();
    console.log("Terms & Condition label visible");
  }

  async clickAgreeBtn() {
    await expect(this.agreeBtn).toBeDisplayed();
    await expect(this.agreeBtn).toBeClickable();
    await CommonTest.doClick(this.agreeBtn);
    console.log("Agree button clicked");
  }
}
module.exports = new Terms();
