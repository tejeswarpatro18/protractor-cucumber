//import { browser, element } from 'protractor';
const { Given, When } = require("cucumber");
const Globals = require('../../support/Globals');
//console.log("jjjjjjjjjjjjjjjjjjjjjjjjj");
const globals = new Globals();
const expect = globals.expect;

    Given("I am on Login Page",  async() => {
         //browser.get('');
         await console.log("tttttttttttttttttttttttttt");

    });

    // Given('I am on Login Page', async function () {
    //     // Write code here that turns the phrase above into concrete actions
    //     await console.log("tttttttttttttttttttttttttt");
    //   });

    // When('I perform login', function () {
    //     console.log("fffffffffffffffffffffffff")
    //   });

    When("I perform login",  async() => {
         await element(by.xpath('//*[@id="LoginTextBox"]')).sendKeys("sa");
         await element(by.xpath('//*[@id="PasswordTextBox"]')).sendKeys("sa");
         await element(by.xpath('//*[@id="LoginButton"]')).click();
        //await browser.sleep(5000);

    });
