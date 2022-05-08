 const loginPage = require('../pageObjects/loginPage')
 //const loginPage2 = require('./pageObjects2/login')
 const shopPage = require('../pageObjects/shop')
 const reviewPage = require('../pageObjects/reviewPage')
 const finalPage = require('../pageObjects/finalPage')
 const expectchai = require('chai').expect
 const fs =require('fs')
let credentials =JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let e2eCredentials =JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))
describe('Ecommerce Application',()=>
{

   credentials.forEach(  ({username,password})  =>{
   xit("Login Fail page titlePotest",()=>

   {
       //webdriverIO code
       browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
       console.log(browser.getTitle())
      browser.
       expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
       loginPage2.Login(username,password)
       console.log(loginPage2.alert.getText() +"is the text am seeing on the screen")
     //signing-dont checck   (Check after button turns to Sign In)
       browser.waitUntil(()=>    loginPage2.signIn.getAttribute('value') === 'Sign In', 
      { timeout: 4000, timeoutMsg: 'Error message did not appear' })
     console.log(loginPage2.alert.getText()+"is the text am seeing on the screen")
     expect(loginPage2.textInfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")

       
   })
})

e2eCredentials.forEach(  ({products})  =>{
   it('End to End TestPO',()=>

   {
   // var products = ["Blackberry","Nokia Edge"]
    browser.url("/loginpagePractise/#")
    //browser.maximizeWindow();
    loginPage.Login("rahulshettyacademy","learning")
    shopPage.checkout.waitForExist()
    shopPage.addProductToCart(products)
    shopPage.checkout.click()
    const sumOfProducts = reviewPage.sumOfProducts()
    const totalIntValue = reviewPage.totalFormattedPrice()
    expectchai(sumOfProducts).to.equal(totalIntValue)
    reviewPage.checkoutBtn.click()
    finalPage.CountryTextBox.setValue("ind")
    finalPage.CountryLoader.waitForExist({reverse:true})
    finalPage.chooseCountry("India")
    finalPage.PurchaseBtn.click()
    expect(finalPage.FinalSuccessMessage).toHaveTextContaining("Success")

})  
})

})