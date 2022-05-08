//const  expectChai  = require("chai").expect;
describe('Ecommerce Application',()=>
{
   xit('Login Fail page title-Smoke1', ()=>

   {
       //webdriverIO code
       browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
       console.log(browser.getTitle())
       browser.pause(3000);
       expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
       console.log(browser.getTitle())
       //xpath, css, linkText
       //---    tagname[attribute='value']  ->  input[name='username']
       // #id -> css    .classname _> CSS
       $("input[name='username']").setValue("rahulshettyacademy")
       $("#username").setValue("secondCSS")
       //--  //*[@attribute='value']   -> //input[@type='password']
       const password = $("//input[@type='password']")
       password.setValue("learning")
       $("#signInBtn").click()
       console.log($(".alert-danger").getText() +"is the text am seeing on the screen")
     //signing-dont checck   (Check after button turns to Sign In)
       browser.waitUntil(()=>    $("#signInBtn").getAttribute('value') === 'Sign In', 
       { timeout: 4000, timeoutMsg: 'Error message did not appear' }) //timeout to check at regular intervals ,use interval parameter which is optional
       console.log($(".alert-danger").getText() +"is the text am seeing on the screen")
     //$("p").getText()
       expect($("p")).toHaveTextContaining("(abcde)")       
   })

  it('Login Fail page title Smoke2',()=>{
      //this.retries(2)
      browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
      console.log(browser.getTitle())
      expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
   })

   xit('Login Success page title',function()
   {
    browser.url("/loginpagePractise/#")
    $("input[name='username']").setValue("rahulshettyacademy")
    const password = $("//input[@type='password']")
    password.setValue("learning")
    $("#signInBtn").click()
    //const link = $("*=Checkout")
    const link = $("a[class='nav-link btn btn-primary']")
    link.waitForExist({ timeout: 5000 });
    expect(browser).toHaveTitle("ProtoCommerce")
    expect(browser).toHaveUrlContaining("shop")
   })


   xit('Login Fail page title-Smoke1', ()=>

   {
       browser.url("https://rahulshettyacademy.com/loginpagePractise/")
       $("input[name='username']").setValue("rahulshettyacademy")
       const password = $("//input[@type='password']")
       password.setValue("learning")
       const radioButtons = $$("#usertype");
       const adminRadioBtn = radioButtons[0];
       const userRadioBtn = radioButtons[1];

       console.log(adminRadioBtn.isSelected());
       console.log(userRadioBtn.isSelected());

       userRadioBtn.click();

       console.log(adminRadioBtn.isSelected());
       console.log(userRadioBtn.isSelected());


      
   })
   

});