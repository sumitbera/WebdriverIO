const qrPage = require("../pages/qr.page");

describe("Scan and Fetch QR Code", () => {
  before("Launch QR application", async () => {
    await qrPage.open();
    await browser.pause(1000);
  });

  it("Scan QR Code",async () =>{

  })
});
