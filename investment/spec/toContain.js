describe('toContain', () => {
    it('Should pass if a string contains another string', () => {
        expect('My big string').toContain('big');
    });

    it('Should pass if an array contains a element', () => {
        expect([1, 2, 3]).toContain(2);
    });
});