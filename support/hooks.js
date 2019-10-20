"use strict";

const { BeforeAll, After, Status, AfterAll,setDefaultTimeout } = require("cucumber");
const conf = require("../config/config").config;

    BeforeAll({timeout: 100*1000}, async function() {
      //console.log("RRRRRRRRRRRRRRRRRRR");
      setDefaultTimeout(60 * 1000);
      return await browser.get(conf.baseUrl);
      
    });
  
    After(async function(scenario) {
      if (scenario.result.status === Status.FAILED) {
        const attach = this.attach; // cucumber's world object has attach function which should be used
        return await browser.takeScreenshot().then(async function(png) {
          const decodedImage = new Buffer(png, "base64");
          return await attach(decodedImage, "image/png");
        });
      }
    });

    AfterAll({timeout: 100 * 1000}, async function() {
      await browser.quit();
      
    });
