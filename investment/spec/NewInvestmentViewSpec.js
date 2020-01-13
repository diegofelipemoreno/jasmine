describe('NewInvestmentView', () => {
    const data = { selector: '#html-fixtures'};
    let newInvestmentView = {};

    beforeAll(() => {
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
        expect(newInvestmentView.submitCta).toBeInDOM();
    });

    it('should add investment on click submit button', () => {
        newInvestmentView.submitCta.click();
        expect(newInvestmentView.investmentList.length).toBeGreaterThan(0);
    });

    describe ('With its inputs correctly filled', () => {

        describe('and when an investment is created', () => {

            beforeEach(() => {
                spyOn(newInvestmentView, 'onCreate');
                spyOn(newInvestmentView, 'create');
                newInvestmentView.onCreate();
                newInvestmentView.create('create-by-spy-purposes');
            });

            it ('should invoke the "onCreate" callback with the created investment', () => {
                expect(newInvestmentView.onCreate).toHaveBeenCalled()
                expect(newInvestmentView.create).toHaveBeenCalledWith('create-by-spy-purposes');
            });
        })
    });

    describe('with its inputs correctly filled', () => {
        describe('and when the form is submitted', () => {
            var callbackSpy;
            var oso;

            beforeEach(() => {
                spyOn(newInvestmentView, 'createInvestment');
                newInvestmentView.submitCta.click();
            });

            it('should create an investment', () => {
                expect(newInvestmentView.createInvestment).toHaveBeenCalled();
            });
        });
    });
});