"use strict";

var LoginPage = require('../pageobjects/login.page');

var SecurePage = require('../pageobjects/secure.page');

describe('My Login application', function () {
  it('should login with valid credentials', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(LoginPage.open());

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(LoginPage.login('tomsmith', 'SuperSecretPassword!'));

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap(expect(SecurePage.flashAlert).toBeExisting());

          case 6:
            _context.next = 8;
            return regeneratorRuntime.awrap(expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!'));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});