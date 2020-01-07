describe('toBeFalsy', () => {
    it('should pass undefined', () => {
        expect(undefined).toBeFalsy();
    });

    it('should pass null', () => {
        expect(null).toBeFalsy();
    });

    it('should pass NaN', () => {
        expect(NaN).toBeFalsy();
    });

    it('should pass the false boolean value', () => {
        expect(false).toBeFalsy();
    });

    it('should pass the number 0', () => {
        expect(0).toBeFalsy();
    });

    it('should pass an empty string', () => {
        expect('').toBeFalsy();
    });
});

describe('toBeTruthy', () => {
    it('should pass the true boolean value', () => {
        expect(true).toBeTruthy();
    });

    it('should pass any number different than 0', () => {
        expect(1).toBeTruthy();
    });

    it('should pass any non empty string', () => {
        expect('a').toBeTruthy();
    });

    it('should pass any object (including an array)', () => {
        expect([]).toBeTruthy();
        expect({}).toBeTruthy();
    });
});