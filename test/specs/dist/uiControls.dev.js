"use strict";

var expectchai = require('chai').expect;

describe('Ecommerce Application', function () {
  xit('UI Controls sanity', function () {
    browser.url("/loginpagePractise/#");
    $("input[name='username']").setValue("Mainak");
    browser.pause(3000);
    $("input[name='username']").setValue("rahulshettyacademy");
    var password = $("//input[@type='password']");
    password.setValue("learning"); //  const radioButtons = $$(".customradio")
    //  userDropdown = radioButtons[1]
    //  userDropdown.$(".radiotextsty").click() //chain of locators

    var radioButtons = $$("//*[@class='customradio']/span[@class='checkmark']");
    radioButtons[1].click(); //userDropdown.$("//*[@class='radiotextsty']").click() //chain of locators

    browser.pause(); //  const modal = $(".modal-body")
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
  });
  xit('Dynamic Dropdown Controls Smoke', function () {
    browser.url("/AutomationPractice/");
    $("#autocomplete").setValue("ind");
    browser.pause(3000);
    var items = $$("[class='ui-menu-item'] div"); //  for(var i =0;i<items.length;i++)
    //  {
    //      console.log(items[i].getText())
    //  }

    var filteredList = items.filter(function (item) {
      return item.getText() === "India";
    });
    console.log(filteredList.length); //filteredList[0].click()
  });
  it('Dynamic Dropdown Controls async', function _callee() {
    var input_dropdown, dropdownList;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(browser.url("/AutomationPractice/"));

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap($("#autocomplete"));

          case 4:
            input_dropdown = _context.sent;
            _context.next = 7;
            return regeneratorRuntime.awrap(input_dropdown.setValue("ind"));

          case 7:
            _context.next = 9;
            return regeneratorRuntime.awrap(browser.pause(2000));

          case 9:
            _context.next = 11;
            return regeneratorRuntime.awrap($$("[class='ui-menu-item'] div"));

          case 11:
            dropdownList = _context.sent;
            //    const filterdList= async (dropdownList)=> {
            //         await dropdownList.filter(async (item)=>{
            //             const text = await item.getText()
            //             return text === "India"
            //        })
            //    const links = await $$('a')
            // const linksText = await links.map((link) => {
            //     return link.getText();
            // })
            console.log(filteredList.length);
            console.log(filteredList); //    const indiaElement = await  filterdList[0];
            //    await indiaElement.click();

          case 14:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  xit('Checkboxes Identification', function () {
    browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    var element = $$("input[type='checkbox']");
    element[1].click();
    console.log(element[1].isSelected());
    console.log(element[2].isSelected());
    browser.saveScreenshot("screenshot.png");
  });
  xit('Veggies', function () {
    browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    $('#search-field').addValue('tomato');
    var filteredVeggies = $$('//tr/td[1]');
    expect(filteredVeggies).toBeElementsArrayOfSize({
      eq: 1
    }); // const firstVeggie = filteredVeggies[0].getText().toLowerCase().toString()
    // console.log(firstVeggie)
    // console.log(firstVeggie)
    // expect(firstVeggie).toBe('tomato')

    expect(filteredVeggies[0]).toHaveTextContaining(filteredVeggies[0].getText());
  });
});