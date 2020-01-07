describe ('Investment', () => {
    const sharePrice = 20;
    const stockSharePrice = 80;
    const quantity = 100;
    const shares = 100;
    let investmentData = {};
    let investment = {};
    let stock = {};

    beforeEach(() => {
        stock = new Stock(stockSharePrice);
        investmentData = {
            stock: stock,
            shares: shares,
            sharePrice: sharePrice,
            quantity: quantity,
            cost: sharePrice * quantity
        };
        investment = new Investment(investmentData);
    });

    it ('should be of a stock', () => {
        expect(investment.stock).toBe(stock);
    });

    it ('it should have the invested shares quantity', () => {
        expect(investment.quantity).toEqual(quantity);
    });

    it('it should have the share paid price', () => {
        expect(investment.sharePrice).toEqual(sharePrice);
    });

    it('it should have the cost property', () => {
        expect(investment.cost).toEqual(sharePrice * quantity);
    });

    // With custom matcher
    it('it should have the cost property an specific value', () => {
        expect(investment.cost).toBe(2000);
    });

    describe('when its stock share price valorizes', () => {
        beforeEach(() => {
            investment.sharePrice = 40;
        });

        it ('should be of a share price positive', () => {
            expect(investment.roi()).toEqual(1);
        });

        it ('should be a good investment', () => {
            // Native matcher
            //expect(investment.isGood()).toEqual(true);

            // With custom matcher
            expect(investment).toBeAGoodInvestment();
        });
    });

    describe('When its stock share proce devalorizes', () => {
        beforeEach(() => {
            stock.sharePrice = 0;
        });

        it('Should have a negative return of investment',  () => {
            expect(investment.roi()).toEqual(-1);
        })

        it('Should be a bad investment', () => {
            expect(investment).not.toBeAGoodInvestment();
        });

    });
});