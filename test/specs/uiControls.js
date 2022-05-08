const expectchai = require('chai').expect

describe('Ecommerce Application',()=>
{
   xit('UI Controls sanity',()=>

   {
    browser.url("/loginpagePractise/#")
    $("input[name='username']").setValue("Mainak")
    browser.pause(3000)
    $("input[name='username']").setValue("rahulshettyacademy")
    const password = $("//input[@type='password']")
    password.setValue("learning")
    //  const radioButtons = $$(".customradio")
    //  userDropdown = radioButtons[1]
    //  userDropdown.$(".radiotextsty").click() //chain of locators

     const radioButtons = $$("//*[@class='customradio']/span[@class='checkmark']")
     radioButtons[1].click()
     //userDropdown.$("//*[@class='radiotextsty']").click() //chain of locators

     browser.pause();
    //  const modal = $(".modal-body")
    //  modal.waitForDisplayed()
    //  $("#cancelBtn").click()
    //  console.log(userDropdown.$(".radiotextsty").isSelected())
    //  userDropdown.$(".radiotextsty").click() 
    //  $(".modal-body").waitForDisplayed()
    //  $("#okayBtn").click()
    //  radioButtons[0].$(".radiotextsty").click() 
    //  //step which will tell that pop up is not displayed
    //  expect(modal).not.toBeDisplayed()
    //  const dropdown= $("select.form-control")
    //  dropdown.selectByAttribute('value','teach')
    //  dropdown.selectByVisibleText('Consultant')
    //  dropdown.selectByIndex(0)
    //  dropdown.getValue()//stud chai is one library which supports assertions
    //  expectchai(dropdown.getValue()).to.equal("stud")

   })

   xit('Dynamic Dropdown Controls Smoke',()=>

   {
       browser.url("/AutomationPractice/")
       $("#autocomplete").setValue("ind")
       browser.pause(3000)
       let items = $$("[class='ui-menu-item'] div")
      //  for(var i =0;i<items.length;i++)
      //  {
      //      console.log(items[i].getText())

      //  }
      const filteredList= items.filter(item=> item.getText() === "India")
      console.log(filteredList.length)
      //filteredList[0].click()

})

it('Dynamic Dropdown Controls async',async ()=>

{
    await browser.url("/AutomationPractice/")
    const input_dropdown = await $(`#autocomplete`)
    await input_dropdown.setValue("ind")
    await browser.pause(2000)
    const dropdownList = await $$("[class='ui-menu-item'] div")


   const filterdList= await dropdownList.filter((item)=>{
            const text = await item.getText()
            return text === "India"
       })
       


//    const links = await $$('a')
// const linksText = await links.map((link) => {
//     return link.getText();
// })
   console.log(filterdList.length)
   console.log(filterdList)
//    const indiaElement = await  filterdList[0];
//    await indiaElement.click();

})

xit('Checkboxes Identification', () => {
browser.url("https://rahulshettyacademy.com/AutomationPractice/")
 const element = $$("input[type='checkbox']")
 element[1].click()
 console.log(element[1].isSelected())
 console.log(element[2].isSelected())
 browser.saveScreenshot("screenshot.png")
})


xit('Veggies', () => {
    browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
    $('#search-field').addValue('tomato')
     const filteredVeggies = $$('//tr/td[1]')
    expect(filteredVeggies).toBeElementsArrayOfSize({eq:1})
    // const firstVeggie = filteredVeggies[0].getText().toLowerCase().toString()
    // console.log(firstVeggie)
    // console.log(firstVeggie)
    // expect(firstVeggie).toBe('tomato')
    expect(filteredVeggies[0]).toHaveTextContaining(filteredVeggies[0].getText());
    })


})

