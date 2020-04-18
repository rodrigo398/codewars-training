const isSquare = require('.');

test('Test 1', () => {
  expect(isSquare(5)).toBeFalsy();
});

test('Test 2', () => {
  expect(isSquare(9)).toBeTruthy();
});

test('Test 3', () => {
  expect(isSquare(7)).toBeFalsy();
});

test('Test 4', () => {
  expect(isSquare(49)).toBeTruthy();
});
