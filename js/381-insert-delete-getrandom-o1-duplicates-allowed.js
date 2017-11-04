var RandomizedCollection = function() {
    this.nums = []
    this.num2Inds = new Map()
};

RandomizedCollection.prototype.insert = function(val) {
    let res = false 
    if(!this.num2Inds.has(val)){
        res = true 
        this.num2Inds.set(val, [])
    }
    let inds = this.num2Inds.get(val)
    inds.push(this.nums.length)
    this.nums.push(val)
    return res
};

RandomizedCollection.prototype.remove = function(val) {
    if(!this.num2Inds.has(val)){ 
        return false
    };
    let inds = this.num2Inds.get(val)
    if(inds.length === 0) return false
    let ind = inds.pop()
    if(this.nums.length - 1 !== ind) {
        let endInd = this.nums.length  - 1
        let end = this.nums[endInd]
        this.nums[ind] = end
        let endInds = this.num2Inds.get(end)
        for(let i = endInds.length - 1; i >= 0; i--) {
            if(endInds[i] === endInd) {
                endInds[i] = ind
                break
            }
        }
    }
    this.nums.pop()
    return true
};

RandomizedCollection.prototype.getRandom = function() {
    return this.nums[parseInt(Math.random() * this.nums.length)];
};


