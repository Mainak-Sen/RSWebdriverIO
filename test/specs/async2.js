describe('eCommerce Application', ()=>               //this is a test suite, takes 2 arguments
                                                    //'=>' instead of the keyword function as it is an anonymous function
{
    xit('login page title', ()=>         //this is a single test case inside the test suite, takes 2 arguments
    {
        
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
 
        //validate correct website has opened
        console.log(browser.getTitle())
 
        //assertions to verify results
        expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
 
        
        //entering a value in edit box by name
        $("input[name='username']").setValue("rahulshettyacademy")      //it will clear the box first and then enter the text
        $("#username").setValue("hello")
        browser.pause(3000)
 
 
        const password = $("//input[@type='password']")
        password.setValue("learning123")
 
        $("#signInBtn").click()
 
        //$("#signInBtn").getAttribute('value') === 'Sign in'
 
        //get text on alert and adding a 'wait' to give time for the alert to popup
        //waiting for value attribute to be true
        // browser.waitUntil(()=> $("#signInBtn").getAttribute('value') === 'Sign in', 
        //     {timeout: 9000, timeoutMsg: 'alert did not show'})
        // console.log($(".alert-danger").getText() + "is the text displayed on screen.")

        browser.waitUntil(()=>    $("#signInBtn").getAttribute('value') === 'Sign In', 
        { timeout: 4000, timeoutMsg: 'Error message did not appear' }) //timeout to check at regular intervals ,use interval parameter which is optional
        console.log($(".alert-danger").getText() +"is the text am seeing on the screen")
 
    });

   
 
});