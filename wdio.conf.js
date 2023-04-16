// const { Reporter } = require('@reportportal/agent-js-webdriverio');

// const config = {
//     token: 'faadc3b8-2ae8-4b45-80c2-39a627799819',
//     endpoint: 'http://13.214.198.245:8080/api/v1',
//     launch: 'WebdriverIO',
//     project: 'superadmin_personal',
//     description: "WebDriver IO Test",
//     seleniumCommandsLogLevel: 'debug',
//     attachPicturesToLogs: true
// };

exports.config = {
  specs: ["./test/specs/**/*.js"],
  exclude: [
    // 'path/to/excluded/files'
  ],
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  appiumUrl: "hub.browserstack.com",
  capabilities: {
    chrome: {
      capabilities: {
        browserName: "chrome",
        acceptInsecureCerts: true,
        "google:chromeOptions": {
          args: [
            "--no-sandbox",
            "--disable-infobars",
            "--headless",
            "--disable-gpu",
            "--window-size=1440,735",
          ],
        },
      },
    },
    appium: {
      port: 4723,
      logPath: "./logs",
      path: "/wd/hub",
      capabilities: {
        'appium:platformName': 'android',
        'appium:deviceName': 'e27ac0c2',
        'appium:app': '/Users/sumitbera/WebdriverIO/app/proof.apk',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.atb.myproof.debug',
        'appium:appActivity': 'com.atb.myproof.MainActivity',
      },
    },
  },
  multiremote:{
    chrome: {
      capabilities: this.chrome,
    },
    appium: {
      capabilities: this.appium,
    },
  },
  logLevel: "info",
  bail: 0,
  baseUrl: "https://test-studio.oliu.id/login",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver","appium"],
  framework: "mocha",
  reporters: ["spec", ["allure", { outputDir: "allure-results" }]],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  before: function () {
    require("expect-webdriverio");
    global.wdioExpect = global.expect;
    const chai = require("chai");
    global.expect = chai.expect;
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
