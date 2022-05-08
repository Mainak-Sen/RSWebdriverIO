"use strict";

describe("Ecommerce Application", function () {
  xit("Login success page title ", function () {
    browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    var username = $("input[name='username']");
    username.setValue("rahulshettyacademy");
    var password = $("//input[@type='password']");
    password.setValue("learninig");
    $("#signInBtn").click();
    var link = $("*= Checkout");
    link.waitForExist();
    expect(browser).toHaveTitleContaining("ProtoCommerce");
    expect(browser).toHaveUrlContaining("shop");
  });
  it('Login fail page title', function () {
    browser.url("https://rahulshettyacademy.com/loginpagePractise/#"); //expect(browser).toHaveTitleContaining("Rahul Shetty Academy")

    var username = $("input[name='username']");
    username.setValue("rahulshettyacademy");
    var password = $("//input[@type='password']");
    password.setValue("learninig123");
    console.log($('p.text-white').getText());
    var optionValue = $("//select[@class = 'form-control']").getValue();
    var selectedOptionElement = $("//select[@class = 'form-control']").$("[value='".concat(optionValue, "']"));
    console.log(selectedOptionElement.getText()); //  $("#signInBtn").click()
    //  console.log($(".alert-danger").getText() + "is the text I am seeing on the screen")
    //  browser.waitUntil(() => $("#signInBtn").getAttribute("value") === "Sign In",
    //  {timeout:4000, timeoutMsg: "Error message did not appear"})
    //  console.log($("//select[@class = 'form-control']").getText())
    //  console.log($('p.text-white').getText())
    //  expect($('p.text-white')).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
    //  console.log($(".alert-danger").getText() + 'is the text I am seeing on the screen')
    //browser.closeWindow()
  });
});