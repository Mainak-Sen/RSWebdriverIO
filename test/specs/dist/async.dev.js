"use strict";

describe('Rahul Shetty login page', function () {
  xit('async2 test ', function _callee() {
    var username;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(browser.url('https://rahulshettyacademy.com/loginpagePractise/'));

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(expect(browser).toHaveTitle('LoginPage Practise | Rahul Shetty Academy'));

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap($('#username'));

          case 6:
            username = _context.sent;
            _context.next = 9;
            return regeneratorRuntime.awrap(username.setValue('WebdriverIO'));

          case 9:
            _context.next = 11;
            return regeneratorRuntime.awrap(browser.pause(3000));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  xit('async2 test ', function _callee3() {
    var username, password, sign_in, alert, text1, text2;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(browser.url("/loginpagePractise/"));

          case 2:
            _context3.next = 4;
            return regeneratorRuntime.awrap(expect(browser).toHaveTitleContaining("Rahul Shetty Academy"));

          case 4:
            _context3.next = 6;
            return regeneratorRuntime.awrap($('#username'));

          case 6:
            username = _context3.sent;
            _context3.next = 9;
            return regeneratorRuntime.awrap(username.setValue('WebdriverIO'));

          case 9:
            _context3.next = 11;
            return regeneratorRuntime.awrap($("//input[@type='password']"));

          case 11:
            password = _context3.sent;
            _context3.next = 14;
            return regeneratorRuntime.awrap(password.setValue("learning"));

          case 14:
            _context3.next = 16;
            return regeneratorRuntime.awrap($("#signInBtn"));

          case 16:
            sign_in = _context3.sent;
            _context3.next = 19;
            return regeneratorRuntime.awrap(sign_in.click());

          case 19:
            _context3.next = 21;
            return regeneratorRuntime.awrap($(".alert-danger"));

          case 21:
            alert = _context3.sent;
            _context3.next = 24;
            return regeneratorRuntime.awrap(alert.getText());

          case 24:
            text1 = _context3.sent;
            console.log(text1 + "is the text am seeing on the screen");
            _context3.next = 28;
            return regeneratorRuntime.awrap(browser.waitUntil(function _callee2() {
              var currentText;
              return regeneratorRuntime.async(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return regeneratorRuntime.awrap(sign_in.getAttribute('value'));

                    case 2:
                      currentText = _context2.sent;
                      return _context2.abrupt("return", currentText === 'Sign In');

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              });
            }, {
              timeout: 4000,
              timeoutMsg: 'Error message did not appear'
            }));

          case 28:
            _context3.next = 30;
            return regeneratorRuntime.awrap(alert.getText());

          case 30:
            text2 = _context3.sent;
            console.log(text2 + "is the text am seeing on the screen");
            _context3.next = 34;
            return regeneratorRuntime.awrap(expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)"));

          case 34:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
  xit("UI Controls", function _callee4() {
    var input_username, input_password, radioButtonArray, txt_popup, cancel_button, _boolean, okay_button;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(browser.url("https://rahulshettyacademy.com/loginpagePractise/#"));

          case 2:
            _context4.next = 4;
            return regeneratorRuntime.awrap($("//*[@id=\"username\"]"));

          case 4:
            input_username = _context4.sent;
            _context4.next = 7;
            return regeneratorRuntime.awrap(input_username.setValue("rahulshettyacademy"));

          case 7:
            _context4.next = 9;
            return regeneratorRuntime.awrap($("//*[@id='password']"));

          case 9:
            input_password = _context4.sent;
            _context4.next = 12;
            return regeneratorRuntime.awrap(input_password.setValue("learning"));

          case 12:
            _context4.next = 14;
            return regeneratorRuntime.awrap($$("//*[@class=\"radiotextsty\"]"));

          case 14:
            radioButtonArray = _context4.sent;
            radioButtonArray[1].click(); //await browser.pause(4000)

            _context4.next = 18;
            return regeneratorRuntime.awrap($("//*[@class=\"modal-body\"]"));

          case 18:
            txt_popup = _context4.sent;
            _context4.next = 21;
            return regeneratorRuntime.awrap(txt_popup.waitForDisplayed());

          case 21:
            _context4.next = 23;
            return regeneratorRuntime.awrap($("//*[@id=\"cancelBtn\"]"));

          case 23:
            cancel_button = _context4.sent;
            _context4.next = 26;
            return regeneratorRuntime.awrap(cancel_button.click());

          case 26:
            _context4.next = 28;
            return regeneratorRuntime.awrap(browser.pause(2000));

          case 28:
            _context4.next = 30;
            return regeneratorRuntime.awrap(radioButtonArray[1].isSelected());

          case 30:
            _boolean = _context4.sent;
            //Print out whether the "User" button is selected
            console.log(_boolean); // Click on "User" radio button -> Click on "Okay" button
            // -> Click on "Admin" button -> Verify popup is NOT DISPLAYED.

            _context4.next = 34;
            return regeneratorRuntime.awrap(radioButtonArray[1].click());

          case 34:
            _context4.next = 36;
            return regeneratorRuntime.awrap(txt_popup.waitForDisplayed());

          case 36:
            _context4.next = 38;
            return regeneratorRuntime.awrap($("//*[@id=\"okayBtn\"]"));

          case 38:
            okay_button = _context4.sent;
            _context4.next = 41;
            return regeneratorRuntime.awrap(browser.pause(2000));

          case 41:
            _context4.next = 43;
            return regeneratorRuntime.awrap(okay_button.click());

          case 43:
            _context4.next = 45;
            return regeneratorRuntime.awrap(browser.pause(2000));

          case 45:
            _context4.next = 47;
            return regeneratorRuntime.awrap(radioButtonArray[0].click());

          case 47:
            _context4.next = 49;
            return regeneratorRuntime.awrap(browser.pause(2000));

          case 49:
            _context4.next = 51;
            return regeneratorRuntime.awrap(expect(txt_popup).not.toBeDisplayed());

          case 51:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
  xit("e2e GreenKart ", function _callee5() {
    var cards;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            browser.url("https://rahulshettyacademy.com/seleniumPractise/#/");
            _context5.next = 3;
            return regeneratorRuntime.awrap($$('.product'));

          case 3:
            cards = _context5.sent;
            _context5.next = 6;
            return regeneratorRuntime.awrap(browser.pause(3000));

          case 6:
            console.log("length of cards*****" + cards.length);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    });
  });
  xit("End to End Test", function _callee6() {
    var username, password, loginBtn, checkOut, productsList, cards, i, productName;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(browser.url("https://rahulshettyacademy.com/loginpagePractise/#"));

          case 2:
            _context6.next = 4;
            return regeneratorRuntime.awrap($('#username'));

          case 4:
            username = _context6.sent;
            _context6.next = 7;
            return regeneratorRuntime.awrap($('#password'));

          case 7:
            password = _context6.sent;
            _context6.next = 10;
            return regeneratorRuntime.awrap($('#signInBtn'));

          case 10:
            loginBtn = _context6.sent;
            _context6.next = 13;
            return regeneratorRuntime.awrap($('*=Checkout'));

          case 13:
            checkOut = _context6.sent;
            _context6.next = 16;
            return regeneratorRuntime.awrap(username.setValue('rahulshettyacademy'));

          case 16:
            _context6.next = 18;
            return regeneratorRuntime.awrap(password.setValue('learning'));

          case 18:
            _context6.next = 20;
            return regeneratorRuntime.awrap(loginBtn.click());

          case 20:
            productsList = ["Blackberry", "Samsung Note 8", "iphone X"]; //wait for cards list to display 

            _context6.t0 = regeneratorRuntime;
            _context6.next = 24;
            return regeneratorRuntime.awrap($('//app-card-list'));

          case 24:
            _context6.t1 = {
              timeout: 10000
            };
            _context6.t2 = _context6.sent.waitForDisplayed(_context6.t1);
            _context6.next = 28;
            return _context6.t0.awrap.call(_context6.t0, _context6.t2);

          case 28:
            _context6.next = 30;
            return regeneratorRuntime.awrap($$('//div[@class="card h-100"]'));

          case 30:
            cards = _context6.sent;
            console.log("length of cards" + cards.length);
            i = 0;

          case 33:
            if (!(i < cards.length)) {
              _context6.next = 53;
              break;
            }

            console.log("inside for block");
            _context6.t3 = regeneratorRuntime;
            _context6.next = 38;
            return regeneratorRuntime.awrap(cards[i].$("div h4 a"));

          case 38:
            _context6.t4 = _context6.sent.getText();
            _context6.next = 41;
            return _context6.t3.awrap.call(_context6.t3, _context6.t4);

          case 41:
            productName = _context6.sent;

            if (!productsList.includes(productName)) {
              _context6.next = 50;
              break;
            }

            console.log("inside if block");
            _context6.t5 = regeneratorRuntime;
            _context6.next = 47;
            return regeneratorRuntime.awrap(cards[i].$('.card-footer button'));

          case 47:
            _context6.t6 = _context6.sent.click();
            _context6.next = 50;
            return _context6.t5.awrap.call(_context6.t5, _context6.t6);

          case 50:
            i++;
            _context6.next = 33;
            break;

          case 53:
          case "end":
            return _context6.stop();
        }
      }
    });
  });
  xit('Login success page title', function _callee7() {
    var username, password, loginBtn, shop;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return regeneratorRuntime.awrap(browser.url("https://www.rahulshettyacademy.com/loginpagePractise/"));

          case 2:
            _context7.next = 4;
            return regeneratorRuntime.awrap($('#username'));

          case 4:
            username = _context7.sent;
            _context7.next = 7;
            return regeneratorRuntime.awrap($('#password'));

          case 7:
            password = _context7.sent;
            _context7.next = 10;
            return regeneratorRuntime.awrap($('#signInBtn'));

          case 10:
            loginBtn = _context7.sent;
            _context7.next = 13;
            return regeneratorRuntime.awrap(username.setValue('rahulshettyacademy'));

          case 13:
            _context7.next = 15;
            return regeneratorRuntime.awrap(password.setValue('learning'));

          case 15:
            _context7.next = 17;
            return regeneratorRuntime.awrap(loginBtn.click());

          case 17:
            _context7.next = 19;
            return regeneratorRuntime.awrap($("//h1[@class='my-4']"));

          case 19:
            shop = _context7.sent;
            shop.waitForExist(); //wait until checkout button is displayed
            //await $("//h1[@class='my-4']").waitForExist()

            _context7.next = 23;
            return regeneratorRuntime.awrap(expect(browser).toHaveUrlContaining("shop"));

          case 23:
            _context7.next = 25;
            return regeneratorRuntime.awrap(expect(browser).toHaveTitle("ProtoCommerce"));

          case 25:
          case "end":
            return _context7.stop();
        }
      }
    });
  });
  xit('Scrolling and Mouse hover', function _callee8() {
    var mouseHover, top;
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return regeneratorRuntime.awrap(browser.url("https://rahulshettyacademy.com/AutomationPractice/"));

          case 2:
            _context8.next = 4;
            return regeneratorRuntime.awrap($("#mousehover"));

          case 4:
            mouseHover = _context8.sent;
            _context8.next = 7;
            return regeneratorRuntime.awrap(mouseHover.scrollIntoView());

          case 7:
            _context8.next = 9;
            return regeneratorRuntime.awrap(browser.pause(3000));

          case 9:
            _context8.next = 11;
            return regeneratorRuntime.awrap(mouseHover.moveTo());

          case 11:
            _context8.next = 13;
            return regeneratorRuntime.awrap(browser.pause(5000));

          case 13:
            _context8.next = 15;
            return regeneratorRuntime.awrap($("//a[@href='#top']"));

          case 15:
            top = _context8.sent;
            _context8.next = 18;
            return regeneratorRuntime.awrap(top.click());

          case 18:
          case "end":
            return _context8.stop();
        }
      }
    });
  });
  it('Login fail page', function _callee10() {
    var username, usernameXpath, pwd, signInBtn;
    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return regeneratorRuntime.awrap(browser.url("https://www.rahulshettyacademy.com/loginpagePractise/"));

          case 2:
            _context10.next = 4;
            return regeneratorRuntime.awrap(expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"));

          case 4:
            _context10.next = 6;
            return regeneratorRuntime.awrap(expect(browser).toHaveTitleContaining("Shetty"));

          case 6:
            _context10.next = 8;
            return regeneratorRuntime.awrap($("#username"));

          case 8:
            username = _context10.sent;
            _context10.next = 11;
            return regeneratorRuntime.awrap(username.setValue("Karine"));

          case 11:
            _context10.next = 13;
            return regeneratorRuntime.awrap($("input[name='username']"));

          case 13:
            usernameXpath = _context10.sent;
            _context10.next = 16;
            return regeneratorRuntime.awrap(usernameXpath.setValue("Karine2"));

          case 16:
            _context10.next = 18;
            return regeneratorRuntime.awrap($("#password"));

          case 18:
            pwd = _context10.sent;
            pwd.setValue("ghhhtr");
            _context10.next = 22;
            return regeneratorRuntime.awrap($("#signInBtn"));

          case 22:
            signInBtn = _context10.sent;
            _context10.next = 25;
            return regeneratorRuntime.awrap(signInBtn.click());

          case 25:
            _context10.next = 27;
            return regeneratorRuntime.awrap(browser.waitUntil(function _callee9() {
              return regeneratorRuntime.async(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return regeneratorRuntime.awrap(signInBtn.getAttribute("value"));

                    case 2:
                      _context9.t0 = _context9.sent;
                      return _context9.abrupt("return", _context9.t0 === "Sign In");

                    case 4:
                    case "end":
                      return _context9.stop();
                  }
                }
              });
            }, {
              timeout: 5000,
              timeoutMsg: "erreur"
            }));

          case 27:
            _context10.next = 29;
            return regeneratorRuntime.awrap(expect($("//div[contains(@class,'alert-danger')]")).toHaveAttribute("style", "display: abc;"));

          case 29:
          case "end":
            return _context10.stop();
        }
      }
    });
  });
});