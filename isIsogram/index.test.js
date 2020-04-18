const isIsogram = require('./index');

test('Test 1', () => {
  expect(isIsogram('abbo')).toBeFalsy();
});

test('Test 2', () => {
  expect(isIsogram('Testing')).toBeFalsy();
});

test('Test 3', () => {
  expect(isIsogram('orange')).toBeTruthy();
});
