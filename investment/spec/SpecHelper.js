beforeEach(function() {
    jasmine.addMatchers({
        toBeAGoodInvestment: () => {
            return {
                compare: (actual, expected) => {
                    const result = {};

                    result.pass = actual.isGood();

                    if (actual.isGood()) {
                        result.message = 'Expected investment to be a bad investment';
                        } else {
                        result.message = 'Expected investment to be a good investment';
                    }

                    return result;
                }
            };
        }
    });
});