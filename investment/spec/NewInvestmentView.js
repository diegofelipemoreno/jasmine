class NewInvestmentView {
    constructor(data) {
        this.element = document.querySelector(data.selector);
        this.stockInput = this.element.querySelector('.new-investment-stock-symbol');
        this.submitInvestmentButton = this.element.querySelector('.submit-investment');
        this.investmentList = [];
    }

    init = () => {
        this.events();
    }

    events = () => {
        this.submitInvestmentButton.addEventListener('click', (event)=> {
            event.preventDefault();

            this.investmentList.push('investment');
        });
    }
}