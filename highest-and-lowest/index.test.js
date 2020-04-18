const highAndLow = require('./index');

test('Test 1', () => {
  expect(highAndLow('3 4 5 6 -99 123')).toBe('123 -99');
});

test('Test 2', () => {
  expect(highAndLow('2 -2')).toBe('2 -2');
});

test('Test 3', () => {
  expect(highAndLow('3 -3')).toBe('3 -3');
});
