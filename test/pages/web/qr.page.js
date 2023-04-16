const Page = require("../page");
const qrLocator = require("../../../locators/web/qrscreen");
const CommonTest = require("../../../utility/commontest");
const Constants = require("../../../utility/appconstants");
const fs = require("fs");

class QrPage extends Page {
  async open() {
    super.open("/");
    expect(browser).toHaveUrlContaining(Constants.LINK_TEXT);
  }

  async qrLayout() {
    const qrLayout = await this.drivers.chrome.$(qrLocator.QR_CODE_LAYOUT);
    //return $(qrLocator.QR_CODE_LAYOUT);
  }

  async qrImage() {
    const qrImage = await this.drivers.chrome.$(qrLocator.QR_IMAGE);
    //return $(qrLocator.QR_IMAGE);
  }

  async verifyQrLayout() {
    //await expect(this.qrLayout).toBeDisplayed();
    await qrLayout.toBeDisplayed();
  }

  async verifyQrImage() {
    //await expect(this.qrImage).toBeDisplayedInViewport();
    await qrImage.toBeDisplayed();
  }

  async captureQrCode() {
    const qrImage = await $(qrLocator.QR_IMAGE);
    await qrImage.saveScreenshot(Constants.QR_FOLDER);
  }

  async deleteFileIfExists() {
    try {
      fs.unlinkSync(Constants.QR_FOLDER);
      console.log("QR Deleted successfully...", Constants.QR_FOLDER);
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = new QrPage();
