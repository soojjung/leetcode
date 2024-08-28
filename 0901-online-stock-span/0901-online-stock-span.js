
var StockSpanner = function() {
    this.stock = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.stock.push(price);

    for (let i = this.stock.length - 2; i >= 0; i--) {
        if (this.stock[i] > price) {
            return this.stock.length -1 - i;
        }
    }
    return this.stock.length;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */