function isSelfNumber(n) {
    return n.toString().split('').every(c => n % (+c) === 0)
}
var selfDividingNumbers = function(left, right) {
    let res = []
    while(left <= right) {
        if(isSelfNumber(left)) {
            res.push(left)
        }
        left ++
    }
    return res
};
