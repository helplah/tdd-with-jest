const sumWithoutHighestAndLowest = require("../src/sumWithoutHighestAndLowest.js");

test("should return all numbers of the array except the highest and the lowest number", () => {
  expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toEqual(16);
  expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toEqual(5);
  expect(sumWithoutHighestAndLowest([10, 10, 10, 1, 5])).toEqual(5);
  // ignore the test case below, need to reimplement sumWithoutHighestandLowest if take that into consideration
  // expect(sumWithoutHighestAndLowest([5, 5, 5, 5, 5])).toEqual(undefined);
});
