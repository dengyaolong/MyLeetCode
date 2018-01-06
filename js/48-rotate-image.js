var rotate = function(matrix) {
    let n = matrix.length - 1;
    if(n === 0) return
    for(let i = 0; i < (n + 1)>>1; i++) {
        for(let k = i; k < n - i;  k++) {
            let c = matrix[k][i]
            matrix[k][i] = matrix[n - i][k] 
            matrix[n - i][k] = matrix[n - k][n - i]
            matrix[n - k][n - i] = matrix[i][n - k]
            matrix[i][n - k] = c
        }
    }
};
