describe('Rahul Shetty login page', () => {
    xit('async2 test ', async () => {
      await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
      await expect(browser).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
      const username = await $('#username');
      await username.setValue('WebdriverIO');
      await browser.pause(3000);
    });

    xit('async2 test ', async () => {
      await browser.url("/loginpagePractise/")
      await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
      const username = await $('#username');
      await username.setValue('WebdriverIO');
      //--  //*[@attribute='value']   -> //input[@type='password']
      const password = await $("//input[@type='password']")
      await password.setValue("learning")
      const sign_in = await $("#signInBtn")
      await sign_in.click()
      const alert = await $(".alert-danger")
      const text1 = await alert.getText()
      console.log(text1 +"is the text am seeing on the screen")
      await browser.waitUntil(async ()=> {const currentText = await sign_in.getAttribute('value')
      return currentText === 'Sign In'
      },{ timeout: 4000, timeoutMsg: 'Error message did not appear' })
      const text2 = await alert.getText()
      console.log( text2 +"is the text am seeing on the screen")
      await  expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)") 
    });

    xit("UI Controls", async ()=>{
      await browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
      const input_username = await $(`//*[@id="username"]`)
      await input_username.setValue("rahulshettyacademy")
      const input_password = await $(`//*[@id='password']`)
      await input_password.setValue("learning")
      // Click on "User" radio button -> Click on "Cancel button"
      // -> Verify popup is DISPLAYED.
      const radioButtonArray = await $$(`//*[@class="radiotextsty"]`)
      radioButtonArray[1].click()
      //await browser.pause(4000)
      const txt_popup = await $(`//*[@class="modal-body"]`)
      await txt_popup.waitForDisplayed()
      const cancel_button = await $(`//*[@id="cancelBtn"]`)
      await cancel_button.click()
      await browser.pause(2000)
      const boolean = await radioButtonArray[1].isSelected()
      //Print out whether the "User" button is selected
      console.log(boolean)
      // Click on "User" radio button -> Click on "Okay" button
      // -> Click on "Admin" button -> Verify popup is NOT DISPLAYED.
      await radioButtonArray[1].click()
      await txt_popup.waitForDisplayed()
      const okay_button = await $(`//*[@id="okayBtn"]`)
      await browser.pause(2000)
      await okay_button.click()
      await browser.pause(2000)
      await radioButtonArray[0].click()
      await browser.pause(2000)
      // Verify whether the popup is displayed
      await expect(txt_popup).not.toBeDisplayed()
      //expect(txt_popup).not.toBeDisplayed()

    })

    xit("e2e GreenKart ",async()=>{
      browser.url("https://rahulshettyacademy.com/seleniumPractise/#/");
      const cards=await $$('.product');
     await  browser.pause(3000);  
      console.log("length of cards*****"+cards.length);
  })

  xit("End to End Test", async () => {
 
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    const username = await $('#username');
    const password = await $('#password');
    const loginBtn = await $('#signInBtn');
    const checkOut = await $('*=Checkout');
    await username.setValue('rahulshettyacademy');
    await password.setValue('learning');
    await loginBtn.click();
    
    const productsList = ["Blackberry", "Samsung Note 8", "iphone X"]
    //wait for cards list to display 
    await (await $('//app-card-list')).waitForDisplayed({ timeout: 10000 })
    const cards = await $$('//div[@class="card h-100"]')
    console.log("length of cards"+cards.length);
    for(let i=0;i<cards.length;i++)
    {
      console.log("inside for block");
      const productName=await (await cards[i].$("div h4 a")).getText();
      if(productsList.includes(productName))
      {
        console.log("inside if block");
       await (await cards[i].$('.card-footer button')).click();
      }
    }

    // console.log("text: " + await checkOut.getText());
    // await checkOut.click();
    // await browser.saveScreenshot("checkout1.png")
  
 })

 xit('Login success page title', async () => {
  await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
  const username = await $('#username');
  const password = await $('#password');
  const loginBtn = await $('#signInBtn');
  //const checkOut = await $('*=Checkout');
  await username.setValue('rahulshettyacademy');
  await password.setValue('learning');
  await loginBtn.click();

  const shop = await $("//h1[@class='my-4']");
  shop.waitForExist();

  //wait until checkout button is displayed
  //await $("//h1[@class='my-4']").waitForExist()
  await expect(browser).toHaveUrlContaining("shop")
  await expect(browser).toHaveTitle("ProtoCommerce")

})

xit('Scrolling and Mouse hover', async () => {
  await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
  const mouseHover = await $("#mousehover")
  await mouseHover.scrollIntoView();
  await browser.pause(3000)
  await mouseHover.moveTo()
  await browser.pause(5000)
  const top = await $("//a[@href='#top']")
  await top.click()

})

 it('Login fail page', async()=>
       {
        //connexion à l'url Async => resolved, pending, rejected...
        //avec await, on garantie que l'étape est terminée avant de passer à la ligne suivante
        await browser.url("https://www.rahulshettyacademy.com/loginpagePractise/");
        //await browser.maximizeWindow();
 
        //on vérifie le titre de la page 
        await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
        await expect(browser).toHaveTitleContaining("Shetty");
 
        //on saisit les champs
        //# pour les id, . pour les classes, nomChamp[attribute='valeur'] pour les tag
        const username = await $("#username"); 
        await username.setValue("Karine");

        const usernameXpath = await $("input[name='username']"); 
        await usernameXpath.setValue("Karine2");

        const pwd = await $("#password");
        pwd.setValue("ghhhtr")

        const signInBtn = await $("#signInBtn");
        await signInBtn.click();

        await browser.waitUntil(
                async()=> (await signInBtn.getAttribute("value"))==="Sign In",
                {
                    timeout:5000, 
                    timeoutMsg:"erreur"
                }
            );
       await expect($("//div[contains(@class,'alert-danger')]")).toHaveAttribute("style","display: abc;");
    })

  });

