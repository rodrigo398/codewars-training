const shortestWord = require('./index');

test('Test 1', () => {
  expect(shortestWord('this is a shortest phrase')).toBe(1);
});
