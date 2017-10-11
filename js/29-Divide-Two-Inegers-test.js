var max = 2147483647
var divide = function(dividend, divisor) {
    if(dividend === 0) return 0
    if(divisor === 0) return  max
    if(dividend < 0) return  -divide(-dividend, divisor)
    if(divisor < 0) return  -divide(dividend, -divisor)
    var r = Math.floor(dividend/divisor)
    if(r > max ) return  max
    return r
};

console.log(divide(1, 2))
