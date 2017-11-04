var RandomizedSet = function() {
    this.nums = []
    this.num2Ind = new Map()
};

RandomizedSet.prototype.insert = function(val) {
    if(this.num2Ind.has(val)){
        return false
    }
    this.num2Ind.set(val, this.nums.length)
    this.nums.push(val)
    return true
};

RandomizedSet.prototype.remove = function(val) {
    if(!this.num2Ind.has(val)){ 
        return false
    };
    let ind = this.num2Ind.get(val)
    this.num2Ind.delete(val)
    if(this.nums.length - 1 !== ind) {
        let end = this.nums[this.nums.length - 1]
        this.nums[ind] = end
        this.num2Ind.set(end, ind)
    }
    this.nums.pop()
    return true
};

RandomizedSet.prototype.getRandom = function() {
    return this.nums[parseInt(Math.random() * this.nums.length)];
};

