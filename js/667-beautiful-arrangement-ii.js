var constructArray = function(n, k) {
    let res = []
    let h = 1, tail = n, flag = true
    while(h <= tail) {
        res.push(flag ? h ++ : tail --)
        if(k-- > 1) {
            flag = !flag
        }
    }
    return res
};
