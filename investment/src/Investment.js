class Investment {
    /**
     * Creates a Investment component.
     */
    constructor(data) {
        this.stock = data.stock;
        this.quantity = data.quantity;
        this.sharePrice = data.sharePrice;
        this.cost = this.quantity * this.sharePrice;
    }

    roi() {
       return (this.stock.sharePrice - this.sharePrice) / this.sharePrice;
    }

    isGood() {
        return  this.roi() > 0;
     }
}