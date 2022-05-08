describe("yoga application",()=>
{
    xit('Login page title',()=>
    {
        //webdriverIO code
        browser.url("https://myclub.vexalicious.co.uk/login");
        console.log(browser.getTitle())
 
        browser.pause(2000)
 
        expect(browser).toHaveTitleContaining("Login - Voxacon")
        let usr= $("input#username")
        usr.setValue("hira2@gmail.com")
        usr.setValue("hiral@gmail.com")
        //$("div[id='username']").sendKeys("hiral.com")
       // $("div[id='password']").setValue("Test@123")
        browser.pause(3000)
    })


    xit('Login page title demo2',()=>
    {
        browser.url("https://myclub.vexalicious.co.uk/login");
        console.log(browser.getTitle())
        browser.pause(2000)
        expect(browser).toHaveTitleContaining("Login - Voxacon")


         $("input#username").setValue("hiralbpandya")
         $("input#username").clearValue()
         browser.pause(3000)
         $("input#username").setValue("hiral.com")
         $("input[id='password']").setValue("Test@123")
         $("button[id='submit']").click()
    })

    it('loginpage title',()=>{
        browser.url("https://courses.rahulshettyacademy.com/")
        //browser.maximizeWindow()
        expect(browser).toHaveTitleContaining("testing")
 
    })
 
});