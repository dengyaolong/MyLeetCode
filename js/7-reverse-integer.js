const r = 2147483647
const l = -2147483648
var reverse = function(x) {
    let res = x >= 0 ? +x.toString().split('').reverse().join('') : - reverse(-x)
    if(res < l || res > r) return 0
    return res
};
