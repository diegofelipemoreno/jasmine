describe('toBeLessThan', () => {
    it('should pass when the actual is less than expected', () => {
        expect(1).toBeLessThan(2)
    });
});

describe('toBeGreaterThan', () => {
    it('should pass when the actual is greater than expected', () => {
        expect(8).toBeGreaterThan(7);
    });
});