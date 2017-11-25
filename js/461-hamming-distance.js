var hammingDistance = function(x, y) {
    x = x.toString(2)       
    y = y.toString(2)       
    let res = 0;
    for(let i = 1; i <= x.length || i <= y.length; i++) {
        let xi = x[x.length - i] || "0"
        let yi = y[y.length - i] || "0"
        if(xi !== yi) res++
    }
    return res
};
