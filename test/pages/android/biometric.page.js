const Page = require("../page");
const biometricLocator = require("../../../locators/mobile/biometric");
const CommonTest = require("../../../utility/commontest");

class Biometric extends Page {
  get biometricLabel() {
    return $(biometricLocator.BIOMETRIC_SECURITY_LABEL);
  }

  get continueBtn() {
    return $(biometricLocator.CONTINUE_BTN);
  }

  async verifyBiometricSecurityLabel() {
    await expect(this.termsLabel).toBeDisplayed();
    console.log("Biometric security label visible");
  }

  async clickContinueBtn() {
    await expect(this.continueBtn).toBeDisplayed();
    await expect(this.continueBtn).toBeClickable();
    await CommonTest.doClick(this.continueBtn);
    console.log("Continue button clicked");
  }
}
module.exports = new Biometric();
