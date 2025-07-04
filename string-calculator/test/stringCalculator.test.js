const { add } = require('../src/stringCalculator');

test('return 0 for empty string', () => {
    expect(add('')).toBe(0);        
});

test('return number for single value', () => {
    expect(add('7')).toBe(7);
    expect(add('2000')).toBe(2000);
});

test('return sum of two numbers separated by comma', () => {
  expect(add('5,2')).toBe(7);
  expect(add('2000,43234')).toBe(45234);
});

test('return sum of multiple numbers', () => {
  expect(add('1,2,3,4')).toBe(10);
  expect(add('1,2,3,4,5,6,7,8,9,10')).toBe(55);
});

test('handles newlines between numbers', () => {
  expect(add('1\n2,3')).toBe(6);
  expect(add('1\n2\n3,4,5')).toBe(15);
});

test('supports custom delimiter', () => {
  expect(add('//;\n1;2')).toBe(3);
  expect(add('//|\n4|3|1')).toBe(8);
});

test('throws error on negative numbers', () => {
  expect(() => add('-2')).toThrow('negative numbers not allowed: -2');
  expect(() => add('//+\n-4+5')).toThrow('negative numbers not allowed: -4');
});

test('throws error with all negative numbers listed', () => {
  expect(() => add('-1,-2,3')).toThrow('negative numbers not allowed: -1,-2');
  expect(() => add('-10,0,-1')).toThrow('negative numbers not allowed: -10,-1');
  expect(() => add('//;\n-7;8;-3')).toThrow('negative numbers not allowed: -7,-3');
});