var addBinary = function(a, b) {
    let len1 = a.length, len2 = b.length
    let len = Math.max(len1, len2)
    let res = "", r = 0
    for(let i = 1; i <= len; i ++) {
        let A = +a[len1 - i] || 0
        let B = +b[len2 - i] || 0
        let C = (A + B + r) % 2
        res = C + res
        r = (A + B + r) > 1 ? 1 : 0
    }
    if(r) {
        res = r + res
    }
    return res
};
