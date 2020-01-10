beforeEach(() => {
    jasmine.addMatchers({
        toBeInDOM: () => {
            return {
                compare: (actual) => {
                    return { pass: document.documentElement.contains(actual) }
                }
            }
        },
        toHaveValue: function () {
            return {
                compare: (actual, value) => {
                    return { pass: actual.value === value }
                }
            }
        }
    });
});