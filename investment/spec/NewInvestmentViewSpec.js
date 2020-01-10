describe('NewInvestmentView', () => {
    const data = { selector: '#html-fixtures'};
    let newInvestmentView = {};

    beforeAll(function () {
        newInvestmentView = new NewInvestmentView(data);
        newInvestmentView.init();
    });


    it('There is a NewInvestmentView on the DOM', () => {
        //expect(newInvestmentView.element).not.toBeNull();
        expect(newInvestmentView.element).toBeInDOM();
    });

    it('should allow the input stock symbol', () => {
        //expect(newInvestmentView.element).not.toBeNull();
        expect(newInvestmentView.stockInput).toBeInDOM();
    });

    it('should have an empty stock symbol', () => {
        expect(newInvestmentView.stockInput).toHaveValue('');
    });
    
    it('should allow submit button on the DOM', () => {
        expect(newInvestmentView.submitInvestmentButton).toBeInDOM();
    });

    it('should add investment on click submit button', () => {
        newInvestmentView.submitInvestmentButton.click();
        expect(newInvestmentView.investmentList.length).toBeGreaterThan(0);
    });
});