class NewInvestmentView {
    constructor(data) {
        this.element = document.querySelector(data.selector);
        this.stockInput = this.element.querySelector('.new-investment-stock-symbol');
        this.submitCta = this.element.querySelector('.submit-investment');
        this.investmentList = [];
        this.name = data.name || '';
    }

    init = () => {
        this.events();
    }

    events = () => {
        this.submitCta.addEventListener('click', (event)=> {
            event.preventDefault();

            this.createInvestment();
        });
    }

    onCreate = () => {
        return this;
    }

    createInvestment = () => {
        this.investmentList.push('investment');

        this.onCreate();
    }

    create = (name) => {
        this.name = name;

        return this;
    }

    click = () => {
        this.stockInput.click();

        return 'clicked';
    }

    // Created to spy the name first and after could a get it.
    setNameInvestment = (name) => {
        this.name = name;
    }

    getInvestmentName = () => {
        return `The name of the Investment is ${this.name}`;
    }
}