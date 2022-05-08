"use strict";

var expectchai = require('chai').expect;

describe('Ecommerce Application', function () {
  it('E2E Test', function () {
    var products = ["Blackberry", "Nokia Edge"];
    console.log(products);
    browser.url("https://rahulshettyacademy.com/loginpagePractise/#"); //browser.maximizeWindow();  

    $("input[name='username']").setValue("rahulshettyacademy");
    var password = $("//input[@type='password']");
    password.setValue("learning");
    $("#signInBtn").click();
    var link = $("*=Checkout");
    browser.pause(3000);
    var card = $$("//div[@class='card h-100']");
    console.log("Baban");
    var newcard2 = card.filter(function (item) {
      return item.$("./div/h4/a").getText() === "Blackberry";
    });
    console.log(newcard2.length);
    cards = $$("div[class='card h-100']");
    cards.filter(function (card) {
      return products.includes(card.$("div h4 a").getText());
    }) //it returns an array of 2 elements
    .map(function (productCard) {
      return productCard.$(".card-footer button").click();
    }); //browser.maximizeWindow();

    link.click();
    productPrices = $$("//tr/td[4]/strong"); //getText()  
    //format it  and convert into Integer  ₹. 65000=> ₹,  65000
    // and apply sum on all the values

    var sumOfProducts = productPrices.map(function (productPrice) {
      return parseInt(productPrice.getText().split(".")[1].trim());
    }) //it returns an array of 2 elements
    .reduce(function (acc, price) {
      return acc + price;
    }, 0); //1st argument , 2nd argument 
    //0+65000 = 65000
    //50,000 + 65000 =115000

    console.log(sumOfProducts);
    var TotalValue = $("h3 strong").getText();
    var totalIntValue = parseInt(TotalValue.split(".")[1].trim());
    expectchai(sumOfProducts).to.equal(totalIntValue);
    $(".btn-success").click();
    $("#country").setValue("ind");
    $(".lds-ellipsis").waitForExist({
      reverse: true
    }); //we are waiting for the loader to disappear

    $("=India").click();
    $("[type='submit']").click();
    expect($(".alert-success")).toHaveTextContaining("Success");
  });
});