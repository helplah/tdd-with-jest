const fizzbuzz = require("../src/fizzbuzz");

test("30 should return fizzbuzz", function() {
  expect(fizzbuzz(30)).toEqual("fizzbuzz");
});

test("3 should return fizz", function() {
  expect(fizzbuzz(3)).toEqual("fizz");
});

test("5 should return buzz", function() {
  expect(fizzbuzz(5)).toEqual("buzz");
});

test("1 should return number 1", function() {
  expect(fizzbuzz(1)).toEqual(1);
});
