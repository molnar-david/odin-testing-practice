const reverseString = require('../src/reverseString');

test('reverse string', () => {
    expect(reverseString('str')).toBe('rts');
});

test('empty string', () => {
    expect(reverseString('')).toBe('');
});
