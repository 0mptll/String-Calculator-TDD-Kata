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

test('handles newlines between numbers', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('supports custom delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('throws error on negative numbers', () => {
  expect(() => add('-2')).toThrow('negative numbers not allowed: -2');
});

test('throws error with all negative numbers listed', () => {
  expect(() => add('-1,-2,3')).toThrow('negative numbers not allowed: -1,-2');
});