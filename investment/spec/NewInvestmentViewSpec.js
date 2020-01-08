describe('NewInvestmentView', () => {
    let stockInput = null;
    let newInvestmentView = {};

    beforeEach(() => {
        newInvestmentView = newInvestmentView('#html-fixtures');
        stockInput = htmlFixtures.querySelector('.new-investment-stock-symbol');
    });

    it('should allow the input stock symbol', () => {
        expect(stockInput).not.toBeNull();
    });
    
    /*
    it('should allow the input of shares', () => {

    });

    it('should allow the input of share price', () => {

    });
    */
});