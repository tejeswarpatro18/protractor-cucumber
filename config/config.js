const path = require("path");
const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("../support/reporter");



exports.config = {
  //seleniumAddress: "http://localhost:4444/wd/hub",
  directConnect: true,
  setDefaultTimeout: 60e3,
  
  baseUrl: "https://web-r2.dev.wkelms.com",
  capabilities: {
    browserName: process.env.TEST_BROWSER_NAME || "chrome"
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/*.feature"],
  exclude: "../features/database.feature",
  // resultJsonOutputFile: "./reports/json/protractor_report.json",
  onPrepare: function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    require('babel-register');
    Reporter.createDirectory(jsonReports);
  },
  cucumberOpts: {
    strict: true,
    format: 'json:./reports/json/cucumber_report.json',
    require: ['../step_definitions/T/*.js', '../support/*.js'],
    //tags: "(@T360Scenario or @CucumberScenario or @ProtractorScenario) and (not @DatabaseTest)" // @DatabaseTest scenario can be included when the username & password of DB have been configured in Support/database.js
  },
  onComplete: function () {
    //browser.quit();
    Reporter.createHTMLReport();
  }
};
