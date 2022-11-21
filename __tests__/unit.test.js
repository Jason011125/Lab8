// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//Phone number
test('tests if this is valid phone number', () => {
    expect(functions.isPhoneNumber('646-510-5725')).toBe(true);
});

test('tests if this is valid phone number', () => {
    expect(functions.isPhoneNumber('216-773-2523')).toBe(true);
});

test('tests if this is invalid phone number', () => {
    expect(functions.isPhoneNumber(646-510-5725)).toBe(false);
});

test('tests if this is invalid phone number', () => {
    expect(functions.isPhoneNumber('6465105725')).toBe(false);
});

//Email
test('tests if this is valid Email', () => {
    expect(functions.isEmail('vedantgoradia119@gmail.com')).toBe(true);
});

test('tests if this is valid Email', () => {
    expect(functions.isEmail('vgoradia@ucsd.edu')).toBe(true);
});

test('tests if this is invalid Email', () => {
    expect(functions.isEmail('vedantgoradia119gmail.com')).toBe(false);
});

test('tests if this is invalid Email', () => {
    expect(functions.isEmail('vgoradia@gmail')).toBe(false);
});

// //Strong password
test('tests if this is valid strong password', () => {
    expect(functions.isStrongPassword('CSE110')).toBe(true);
});

test('tests if this is valid strong password', () => {
    expect(functions.isStrongPassword('Prof_Powell')).toBe(true);
});

test('tests if this is invalid strong password', () => {
    expect(functions.isStrongPassword('CSE110!')).toBe(false);
});

test('tests if this is invalid strong password', () => {
    expect(functions.isStrongPassword('CSE')).toBe(false);
});

// //Date
test('tests if this is valid Date', () => {
    expect(functions.isDate('01/02/2022')).toBe(true);
});

test('tests if this is valid Date', () => {
    expect(functions.isDate('1/2/1990')).toBe(true);
});

test('tests if this is invalid Date', () => {
    expect(functions.isDate('1/2/90')).toBe(false);
});

test('tests if this is invalid Date', () => {
    expect(functions.isDate('13/2/90')).toBe(false);
});

// //Hex-color
test('tests if this is valid Hex-color', () => {
    expect(functions.isHexColor('#666')).toBe(true);
});

test('tests if this is valid Hex-color', () => {
    expect(functions.isHexColor('#FFFF76')).toBe(true);
});

test('tests if this is invalid Hex-color', () => {
    expect(functions.isHexColor('FFFG76')).toBe(false);
});

test('tests if this is invalid Hex-color', () => {
    expect(functions.isHexColor('#FFFFF56')).toBe(false);
});