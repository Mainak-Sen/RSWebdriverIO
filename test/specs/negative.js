describe('Ecommerce application',()=>{
    it('loginpage title',()=>{
        browser.url("https://courses.rahulshettyacademy.com/")
        browser.maximizeWindow()
        expect(browser).toHaveTitleContaining("testing")
 
    })
 
});