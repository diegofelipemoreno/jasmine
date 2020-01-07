describe('toBeNull', () => {
    it('should pass null', () => {
        expect(null).toBeNull();
    });
});

describe('toBeUndefined', () => {
    it('should pass undefined', () => {
        expect(undefined).toBeUndefined();
    });
});

describe('toBeNaN', () => {
    it('should pass NaN', () => {
        expect(NaN).toBeNaN();
    });
});