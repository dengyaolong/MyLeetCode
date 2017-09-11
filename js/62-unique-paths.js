var uniquePaths = function(m, n) {
    let a = {};
    for(let i = 0; i < m; i++) {
        a[i] = {}
        for(let j = 0; j < n; j++) {
            console.log(i, j)
            if(j === 0) a[i][j] = 1
            else if(i === 0) a[i][j] = 1
            else a[i][j] = a[i][j - 1] + a[i - 1][j]
        }
    }
    return a[m-1][n-1]
};
