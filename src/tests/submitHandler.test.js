const submitHandler = require('../client/js/submitHandler');

describe('Test "submitHandler()" should exist', () => {
    test('It should return true', async () => {
        expect(submitHandler).toBeDefined();
    });
});
describe('Test "submitHandler()" should be a function', () => {
    test('It should be a function', async () => {
        expect(typeof submitHandler).toBe("function");
    });
});