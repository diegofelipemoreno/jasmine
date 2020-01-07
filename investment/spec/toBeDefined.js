/*
 * Checks whether a variable is defined and you don't care about its value,
 * Anything except undefined will pass under this matcher, even null.
 *
 */
describe('toBeDefined', () => {
    it('Should pass any value other than undefined', () => {
        expect(null).toBeDefined();
    });
});