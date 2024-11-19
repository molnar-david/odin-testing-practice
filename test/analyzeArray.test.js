const analyzeArray = require('../src/analyzeArray');

test('positive numbers', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test('negative numbers', () => {
    expect(analyzeArray([-1,-8,-3,-4,-2,-6])).toStrictEqual({ average: -4, min: -8, max: -1, length: 6 });
});

test('both positive and negative numbers', () => {
    expect(analyzeArray([1,8,3,-5,4,2,-7,6])).toStrictEqual({ average: 1.5, min: -7, max: 8, length: 8 });
});

test('empty array', () => {
    expect(analyzeArray([])).toStrictEqual({ average: undefined, min: undefined, max: undefined, length: 0 });
});
