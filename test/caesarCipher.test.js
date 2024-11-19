const caesarCipher = require('../src/caesarCipher');

test('lowercase, no wrapping', () => {
    expect(caesarCipher('abcd', 3)).toBe('defg');
});

test('lowercase, wrapping', () => {
    expect(caesarCipher('wxyz', 3)).toBe('zabc');
});

test('uppercase', () => {
    expect(caesarCipher('WXYZ', 3)).toBe('ZABC');
});

test('mixed case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('non-letters should remain the same', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('no shift', () => {
    expect(caesarCipher('Hello, World!', 0)).toBe('Hello, World!');
});

test('negative shift', () => {
    expect(caesarCipher('Hello, World!', -3)).toBe('Ebiil, Tloia!');
});

test('shift = 26', () => {
    expect(caesarCipher('Hello, World!', 26)).toBe('Hello, World!');
});

test('shift >= 26', () => {
    expect(caesarCipher('Hello, World!', 29)).toBe('Khoor, Zruog!');
});

test('shift <= -26', () => {
    expect(caesarCipher('Hello, World!', -29)).toBe('Ebiil, Tloia!');
});

test('empty string', () => {
    expect(caesarCipher('', 3)).toBe('');
});
