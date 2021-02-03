const stringToNumber = require('./main');

test('"42" should become 42', () => {
  expect(stringToNumber("42")).toBe(42);
});

test('"0" should become 0', () => {
  expect(stringToNumber("0")).toBe(0);
});

test('"42a" should become 42', () => {
  expect(stringToNumber("42a")).toBe(42);
});

test('"42a35" should become 42', () => {
  expect(stringToNumber("42a35")).toBe(42);
});

test('"abc42" should become 0', () => {
  expect(stringToNumber("abc42")).toBe(0);
});

test('"-42" should become -42', () => {
  expect(stringToNumber("-42")).toBe(-42);
});

test('"Infinity" should become Infinity', () => {
  expect(stringToNumber("Infinity")).toBe(Infinity);
});

test('"-Infinity" should become -Infinity', () => {
  expect(stringToNumber("-Infinity")).toBe(-Infinity);
});
