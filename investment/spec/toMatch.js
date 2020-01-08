describe('toMatch', () => {
    it('should pass a matching string', () => {
        expect('My big matched string').toMatch(/My(.+)string/);
    });
});