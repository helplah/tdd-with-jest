const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

test("should return the first positive element of an array that is not consecutive", () => {
  expect(firstNonConsecutiveNumber([1, 3])).toEqual(3);
  expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toEqual(4);
});

test("should return the first negative element of an array that is not consecutive", () => {
  expect(firstNonConsecutiveNumber([-1, 0, 1, -10])).toEqual(-10);
});

test("should return null if all the elements of an array are in consecutive order", () => {
  expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toEqual(null);
});
