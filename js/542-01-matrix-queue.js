var updateMatrix = function(matrix) {
    let n = matrix.length
        , m = matrix[0].length
        , res = matrix
        , toFloods = []

    for(let i = 0; i < n; ++i) {
        for(let j = 0; j < m; ++j) {
            if(matrix[i][j] === 0) {
                res[i][j] = 0
                toFloods.push([i, j])
            } else {
                res[i][j] = Number.MAX_SAFE_INTEGER
            }
        }
    }
    
    function legal(i, j) {
        return i < n && j < m && i >= 0 && j >= 0
    }
  
    let dt = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    while(toFloods.length > 0) {
        let pt = toFloods.shift()
        let i = pt[0], j = pt[1]
        let curVal = res[i][j] + 1
        for(let k = 3; k >= 0; --k) {
            let ci = i + dt[k][0], cj = j + dt[k][1]
            if(legal(ci, cj) && res[ci][cj] > curVal) {
                res[ci][cj] = curVal
                toFloods.push([ci, cj])
            }
        }
    }
    return res
};
