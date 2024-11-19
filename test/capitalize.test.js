const capitalize = require('../src/capitalize');

test('capitalize first letter', () => {
    expect(capitalize('test')).toBe('Test');
});

test('first letter already capitalized', () => {
    expect(capitalize('Test')).toBe('Test');
});

test('first character is not a letter', () => {
    expect(capitalize('&123')).toBe('&123');
});

test('empty string', () => {
    expect(capitalize('')).toBe('');
});
