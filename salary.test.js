var { alice, bob, charlie, hanh } = require('./factory');
var validator = require('./strategy');

describe('alice', () => {
    test('before', () => {
        expect(alice.getSalary()).toBe(6000);
    });
    test('after', () => {
        alice.calculate();
        expect(alice.getSalary()).toBe(4800);
    });
});

describe('bob', () => {
    test('before', () => {
        expect(bob.getSalary()).toBe(4000);
    });
    test('after', () => {
        bob.calculate();
        expect(bob.getSalary()).toBe(3024);
    });
});

describe('charlie', () => {
    test('before', () => {
        expect(charlie.getSalary()).toBe(5000);
    });
    test('after', () => {
        charlie.calculate();
        expect(charlie.getSalary()).toBe(3690);
    });
});

test('validate', () => {
    validator.validate(alice);
    expect(validator.hasErrors()).toBe(false);
    validator.validate(bob);
    expect(validator.hasErrors()).toBe(false);
    validator.validate(charlie);
    expect(validator.hasErrors()).toBe(false);
    validator.validate(hanh);
    expect(validator.hasErrors()).toBe(true);
});
