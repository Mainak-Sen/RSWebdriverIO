"use strict";

//const  expectChai  = require("chai").expect;
describe('Ecommerce Application', function () {
  xit('Login Fail page title-Smoke1', function () {
    //webdriverIO code
    browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    console.log(browser.getTitle());
    browser.pause(3000);
    expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
    console.log(browser.getTitle()); //xpath, css, linkText
    //---    tagname[attribute='value']  ->  input[name='username']
    // #id -> css    .classname _> CSS

    $("input[name='username']").setValue("rahulshettyacademy");
    $("#username").setValue("secondCSS"); //--  //*[@attribute='value']   -> //input[@type='password']

    var password = $("//input[@type='password']");
    password.setValue("learning");
    $("#signInBtn").click();
    console.log($(".alert-danger").getText() + "is the text am seeing on the screen"); //signing-dont checck   (Check after button turns to Sign In)

    browser.waitUntil(function () {
      return $("#signInBtn").getAttribute('value') === 'Sign In';
    }, {
      timeout: 4000,
      timeoutMsg: 'Error message did not appear'
    }); //timeout to check at regular intervals ,use interval parameter which is optional

    console.log($(".alert-danger").getText() + "is the text am seeing on the screen"); //$("p").getText()

    expect($("p")).toHaveTextContaining("(abcde)");
  });
  it('Login Fail page title Smoke2', function () {
    //this.retries(2)
    browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
  });
  xit('Login Success page title', function () {
    browser.url("/loginpagePractise/#");
    $("input[name='username']").setValue("rahulshettyacademy");
    var password = $("//input[@type='password']");
    password.setValue("learning");
    $("#signInBtn").click(); //const link = $("*=Checkout")

    var link = $("a[class='nav-link btn btn-primary']");
    link.waitForExist({
      timeout: 5000
    });
    expect(browser).toHaveTitle("ProtoCommerce");
    expect(browser).toHaveUrlContaining("shop");
  });
  xit('Login Fail page title-Smoke1', function () {
    browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    $("input[name='username']").setValue("rahulshettyacademy");
    var password = $("//input[@type='password']");
    password.setValue("learning");
    var radioButtons = $$("#usertype");
    var adminRadioBtn = radioButtons[0];
    var userRadioBtn = radioButtons[1];
    console.log(adminRadioBtn.isSelected());
    console.log(userRadioBtn.isSelected());
    userRadioBtn.click();
    console.log(adminRadioBtn.isSelected());
    console.log(userRadioBtn.isSelected());
  });
});