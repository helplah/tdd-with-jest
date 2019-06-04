const findMultiples = require("../src/findMultiples");

/*
Write a function findMultiples(base, limit) that takes a value, integer,
and returns a list of its multiples up to another value, limit.
If limit is a multiple of integer, it should be included as well.
There will only ever be positive integers passed into the function,
not consisting of 0. The limit will always be higher than the base.

Examples:
findMultiples(2, 6) // return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

test("should return multiples of base up till a multiple limit", () => {
  expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
  expect(findMultiples(3, 9)).toEqual([3, 6, 9]);
  expect(findMultiples(3, 10)).toEqual([3, 6, 9]);
});

test("should return multiples of base up till a non-multiple limit", () => {
  expect(findMultiples(3, 10)).toEqual([3, 6, 9]);
});
