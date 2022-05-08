"use strict";

var expectchai = require('chai').expect;

describe('Rahul Shetty login page', function () {
  xit('async test ', function () {
    browser.url('/angularpractice/');
    console.log(browser.getTitle());
    expect(browser).toHaveTitleContaining("ProtoCommerce");
    $("input[class*='ng-invalid'][name='name']").setValue("Mainak");
    browser.pause(3000);
  });
  it('Chai assertions for UI controls', function () {
    browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(browser.getTitle()); //username

    $("input[id='username']").setValue("rahulshettyacademy");
    browser.pause(1000); //pwd

    $("#password").setValue("learning");
    browser.pause(1000); //clicking the radio buttons
    //by using $$ allows us to select all the matching elements this is a label

    var radioOptions = $$(".customradio");
    var options = radioOptions[1]; //user radiobutton which gives pop up
    //To select that option traversing from parent to child

    radioOptions[1].$("span").click();
    browser.pause(2000); //verify the popup

    var modal = $(".modal-body");
    modal.waitForDisplayed();
    $("#cancelBtn").click(); //Check whether Admin option is selected or not -It will return false since user is selected

    $$(".customradio")[0].$("span").isSelected(); //Press okay button in popup - popup comes for user option only so selected readio[1]
    //since selected okay button it will move to Admin option and 
    //returns false now as user is not selected

    options.$("span").click();
    modal.waitForDisplayed();
    $("#okayBtn").click();
    console.log("Selected value result :" + options.$("span").isSelected()); //validate popup is not shown when admin is selected

    expect(modal).not.toBeDisplayed();
    var ddown = $("select.form-control");
    ddown.selectByAttribute('value', 'teach');
    browser.pause(1000);
    ddown.selectByIndex(0);
    browser.pause(1000);
    console.log(ddown.getValue());
    expectchai(ddown.getValue()).to.equal("stud");
  });
}); // describe('Ecommerce Application', () => { it('Home page title', () => { 
//   //Webdriver IO code 
//   //browser.url("https://uk.justhype.com/") 
//   browser.url("https://rahulshettyacademy.com/") 
//   console.log(browser.getTitle())
//    browser.pause(3000) 
//    expect(browser).toHaveTitleContaining("abc")
// })
// });