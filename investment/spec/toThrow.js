describe('toThrow', () => {
    it('should pass when the exception is thrown', () => {
        expect(() => {
            throw 'Some exception';
        }).toThrow('Some exception');
    });
});

describe('exceptions with jasmine', () => {
    it('The "toThrow" macther is for testing if a function throws an exception', () => {
        const foo = () => 3 + 2;
        const bar = () => j + 2;

        expect(foo).not.toThrow();
        expect(bar).toThrow();
    });

    it ('Should catch a custom expection', () => {
        const boom = () => {
            throw new Error('Boom !');
        }

        expect(boom).toThrow();
    });

    it('Should match a custom exception message', () => {
        const boom = () => {
            throw 'Boom!';
        }

        expect(boom).toThrow('Boom!');

        expect(boom).not.toThrow("foo");
        expect(boom).not.toThrow(new Error("boom!"));
        expect(boom).not.toThrowError("boom!");
    });
});