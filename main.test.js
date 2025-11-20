const {
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray,
  calculator,
} = require("./main.js");

test.skip("returns capitalized boom to Boom", () => {
  expect(capitalize("boom")).toBe("Boom");
});

test.skip("returns reversed string pool to loop", () => {
  expect(reverseString("pool")).toBe("loop");
});

test.skip("checking calculator basic operations", () => {
  expect(calculator.add(5, 2)).toBe(7);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(5, 2)).toBe(10);
  expect(calculator.divide(5, 2)).toBe(2.5);
});

test.skip("Encrypting text xyz to abc", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray function returns object equals provided object", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
