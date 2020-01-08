describe('toBeClose', () => {
    it('should pass when the actual is close withna given precision', () => {
        expect(3.1415).toBeCloseTo(2.8, 0);
        expect(3.1415).not.toBeCloseTo(2.8, 1);
    });
});