const calculator = require('../src/calculator');

test('add two numbers', () => {
    expect(calculator.add(123, 456)).toBe(579);
});

test('subtract two numbers', () => {
    expect(calculator.subtract(456, 123)).toBe(333);
});

test('divide two integers', () => {
    expect(calculator.divide(123, 3)).toBe(41);
});

test('divide two floating point numbers', () => {
    expect(calculator.divide(7.5, 1.5)).toBe(5);
});

test('multiply two integers', () => {
    expect(calculator.multiply(7, 12)).toBe(84);
});
