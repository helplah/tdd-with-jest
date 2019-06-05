const account = require("../src/account.js");

test("should return balance", () => {
  expect(account.getBalance()).toEqual(500);
});

test("should deposit amount when balance is less than 5000", () => {
  account.deposit(100);
  expect(account.getBalance()).toEqual(600);
});

test("should not deposit amount when balance is 5000 or more", () => {
  account.balance = 5000;
  account.deposit(100);
  expect(account.getBalance()).toEqual(5000);
});

test("should withdraw amount when balance is more than 0", () => {
  account.withdraw(100);
  expect(account.getBalance()).toEqual(4900);
});

test("should not withdraw amount when balance is 0 or less", () => {
  account.balance = 0;
  account.withdraw(100);
  expect(account.getBalance()).toEqual(0);
});
