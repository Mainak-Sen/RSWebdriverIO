"use strict";

var loginPage = require('../pageObjects/loginPage'); //const loginPage2 = require('./pageObjects2/login')


var shopPage = require('../pageObjects/shop');

var reviewPage = require('../pageObjects/reviewPage');

var finalPage = require('../pageObjects/finalPage');

var expectchai = require('chai').expect;

var fs = require('fs');

var credentials = JSON.parse(fs.readFileSync('test/testData/LoginTest.json'));
var e2eCredentials = JSON.parse(fs.readFileSync('test/testData/e2eTest.json'));
describe('Ecommerce Application', function () {
  credentials.forEach(function (_ref) {
    var username = _ref.username,
        password = _ref.password;
    xit("Login Fail page titlePotest", function () {
      //webdriverIO code
      browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
      console.log(browser.getTitle());
      browser.expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
      loginPage2.Login(username, password);
      console.log(loginPage2.alert.getText() + "is the text am seeing on the screen"); //signing-dont checck   (Check after button turns to Sign In)

      browser.waitUntil(function () {
        return loginPage2.signIn.getAttribute('value') === 'Sign In';
      }, {
        timeout: 4000,
        timeoutMsg: 'Error message did not appear'
      });
      console.log(loginPage2.alert.getText() + "is the text am seeing on the screen");
      expect(loginPage2.textInfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)");
    });
  });
  e2eCredentials.forEach(function (_ref2) {
    var products = _ref2.products;
    it('End to End TestPO', function () {
      // var products = ["Blackberry","Nokia Edge"]
      browser.url("/loginpagePractise/#"); //browser.maximizeWindow();

      loginPage.Login("rahulshettyacademy", "learning");
      shopPage.checkout.waitForExist();
      shopPage.addProductToCart(products);
      shopPage.checkout.click();
      var sumOfProducts = reviewPage.sumOfProducts();
      var totalIntValue = reviewPage.totalFormattedPrice();
      expectchai(sumOfProducts).to.equal(totalIntValue);
      reviewPage.checkoutBtn.click();
      finalPage.CountryTextBox.setValue("ind");
      finalPage.CountryLoader.waitForExist({
        reverse: true
      });
      finalPage.chooseCountry("India");
      finalPage.PurchaseBtn.click();
      expect(finalPage.FinalSuccessMessage).toHaveTextContaining("Success");
    });
  });
});