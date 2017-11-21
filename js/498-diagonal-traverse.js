var findDiagonalOrder = function(matrix) {
    if(matrix.length === 0) return []
    let res = []
    let x = 0, y = 0, dx = -1, dy= 1
    let n = matrix.length, m = matrix[0].length
    let redirect = 2
    for(;res.length != n * m; x += dx, y += dy){
        if(x < n && x >= 0 && y >= 0 && y < m){
            res.push(matrix[x][y])
            redirect = 0
        } else if(redirect < 2) {
            redirect++
            if(redirect === 2) {
                x ++
                dx *= -1
                dy *= -1
            }
        }
    }
    return res
};
