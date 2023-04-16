const qrPage = require("../pages/web/qr.page");
const getStartedPage = require("../pages/android/getstarted.page");
const termsPage = require("../pages/android/terms.page")

describe("Scan and Fetch QR Code", () => {
  before("Launch QR application", async () => {
    await qrPage.open();
    await browser.pause(1000);
  });

  it("Verify QR Layout", async () => {
    await browser.pause(1000);
    await qrPage.verifyQrLayout();
  });

  it("Verify QR Image", async () => {
    await browser.pause(1000);
    await qrPage.verifyQrImage();
  });

  it("Capture and Store QR code", async () => {
    await browser.pause(1000);
    await qrPage.deleteFileIfExists();
    await qrPage.captureQrCode();
  });

  it("Verify User is on Get Started screen of app", async () => {
    await browser.pause(1000);
  });

});
