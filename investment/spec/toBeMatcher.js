describe('toBe', function() {
    it('should pass equal numbers', function() {
        expect(1).toBe(1);
    });

    it('should pass equal strings', function() {
        expect('testing').toBe('testing');
    });

    it('should pass equal booleans', function() {
        expect(true).toBe(true);
    });

    it('should pass same objects', function() {
        var object = {a: 'testing'};

        expect(object).toBe(object);
    });

    it('should pass same arrays', function() {
        var array = [1, 2, 3];

        expect(array).toBe(array);
    });
});