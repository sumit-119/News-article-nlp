const validUrl = require('../client/js/urlValidator');

describe('Test to confirm that "validUrl()" should be a valid function', () => {
    test('It should be a valid function', async () => {
        expect(typeof validUrl).toBe("function");
    });
});
describe('Test to confirm that "validUrl()" should be present', () => {
    test('It should return true', async () => {
        expect(validUrl).toBeDefined();
    });
});

describe('Testing my function "validUrl()" for wrong url', () => {
    var url = "bkdsabjjsbadjbdksa";
    test('It should return false', async () => {
        const link = validUrl(url);
        expect(link).toBe(false);
    });
});

describe('Test case to check "validUrl()" for correctly inputted url', () => {
    var url = "https://medium.freecodecamp.org/express-js-and-aws-lambda-a-serverless-love-story-7c77ba0eaa35";
    test('It should return true', async () => {
        const link = validUrl(url);
        expect(link).toBe(true);
    });
});