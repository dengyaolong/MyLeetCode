var findComplement = function(num) {
    if(num === 0) return 1
    let r = 0, i = 0
    while(num) {
        if (!(num & 1)) {
            r += 1 << i
        }
        i++, num >>= 1
    }
    return r
};
