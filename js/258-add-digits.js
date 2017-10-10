var addDigits = function(num) {
    while(num > 9) {
        let r = 0, tmp = num
        while(tmp > 0) {
            r += tmp % 10
            tmp = parseInt(tmp / 10)
        }
        num = r
    }
    return num
};
