const operations = require('../operations/');

test('Adds two given numbers', () => {
    expect(operations.add(1,2)).toBe(3);
});

test('Substract the second num,ber from the first number', () => {
    expect(operations.subtract(5,3)).toBe(2);
});

test('Multiplies two given numbers', () => {
    expect(operations.multiply(25,5)).toBe(125);
});

test('Divides the first number by the second one', () => {
    expect(operations.divide(100,100)).toBe(1);
});

test('Multiply really big numbers', () => {
    expect(operations.multiply(1352342342242,264231441546)).toBe(3.5733136655429775e+23);
});