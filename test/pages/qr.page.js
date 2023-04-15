const Page = require("../pages/page");
const qrLocator = require("../../locators/qrscreen");
const CommonTest = require("../../utility/commontest");
const Constants = require('../../utility/appconstants');

class QrPage extends Page {
  
    async open() {
        super.open('/')
        await expect(browser).toHaveUrlContaining(Constants.LINK_TEXT)
    }

    get qrLayout() {
    return $(qrLocator.QR_CODE_LAYOUT);
  }

  get qrImage() {
    return $(qrLocator.QR_IMAGE);
  }
}
module.exports = new QrPage()
