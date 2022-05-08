const expectchai = require('chai').expect
describe('Functional Testing on  Application',()=>
{
   it('Scrolling and Mouse hover',()=>
   {

    browser.url("/AutomationPractice/")
    $("#mousehover").scrollIntoView()
     $("#mousehover").moveTo()
    $("=Top").click()
    browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
    //$("button").click({ button: 'right' })
    browser.pause(3000)
    $("button").doubleClick()
    console.log(browser.isAlertOpen()) //true
    expectchai(browser.isAlertOpen()).to.be.true
    console.log(browser.getAlertText())//
    expectchai(browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
    browser.acceptAlert() //clicks on ok button
    browser.pause(3000)
    console.log("Pause executed successfully")

})

xit('Web Tables Sort validation Smoke',()=>
{
    browser.url("/seleniumPractise/#/offers")
    $("tr th:nth-child(1)").click()
    //retrive list of veggie names into array A
    //sort the array A ->Array B
    //compare Array A and Array B //fail
    const veggiesLocators = $$("tr td:nth-child(1)")
    const OriginalveggiesNames =veggiesLocators.map(veggie=>veggie.getText())
    console.log(OriginalveggiesNames)
    veggies =OriginalveggiesNames.slice()
     //Arrays are pass by reference,that is why we are using a copy of the OriginalveggiesNames array to apply sort on it 
     //so that OriginalveggiesNames array doesn't get disturbed  
    sortedVeggies = veggies.sort()
    console.log(sortedVeggies)
    console.log(veggies)
    expectchai(OriginalveggiesNames).to.eql(sortedVeggies)


})

xit('Web Tables Filter validation',()=>
{
    browser.url("/seleniumPractise/#/offers")
    browser.pause(3000);
    $("input[type='search']").setValue("tomato")
    const veggieLocators = $$("tr td:nth-child(1)")
    expect(veggieLocators).toBeElementsArrayOfSize({eq:1})
    console.log(veggieLocators[0].getText())
    
    expect(veggieLocators[0]).toHaveTextContaining("Tomato")



})
})