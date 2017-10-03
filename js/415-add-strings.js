var addStrings = function(num1, num2) {
    let r = 0
    let len1 = num1.length, len2 = num2.length
    let len = Math.max(len1, len2)
    let res = ""
    for(let i = 1; i <= len; ++i) {
        let a = +num1[len1 - i] || 0
        let b = +num2[len2 - i] || 0
        let c = a + b + r
        res = c % 10 + res
        r = +(c > 9)
    }
    if(r) {
        res = r + res
    }
    return res
};

