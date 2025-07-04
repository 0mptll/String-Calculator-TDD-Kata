const { add } = require('../src/stringCalculator');

test('return 0 for empty string', () => {
    expect(add('')).toBe(0);
});

test('return number for single value', () => {
    expect(add('7')).toBe(7);
});

test('return sum of two numbers separated by comma', () => {
  expect(add('5,2')).toBe(7);
});

test('return sum of multiple numbers', () => {
  expect(add('1,2,3,4')).toBe(10);
});