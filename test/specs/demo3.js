describe("Ecommerce Application", () => {
  it("Dynamic Dropdown Controls", function () {
    browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    $("#autocomplete").setValue("ind");
    //removing this browser.pause(3000) breaks the code)
    //browser.pause(3000);
    let items = $$(".ui-menu-item-wrapper");
    browser.waitUntil(
      () => (
        $$(".ui-menu-item-wrapper")[0] != undefined,
        {
          timeout: 5000,
          timeoutMsg: "expected text to be different after 5s",
        }
      )
    );
    console.log(items[0]);
    //items.waitForDisplayed({ timeout: 5000 });
    // for (var i=0; i<items.length; i++){
    //   console.log(items[i].getText());
    // }
    //items.map(item => item.waitForExist({ timeout: 5000 }));
    const desiredLocator = items.filter(function (item) {
      return item.getText() === "India";
    });
    desiredLocator[0].click();
    // browser.pause(3000)
  });
});
