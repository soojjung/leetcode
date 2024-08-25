/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size
    this.items = []
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
        this.items.push(val)
    let total = 0
    let count = 0

    for(let i = this.items.length - 1; i >= 0; i--) {
        if(count == this.size) break
        count++
        total += this.items[i]
    }

    return total / count
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */