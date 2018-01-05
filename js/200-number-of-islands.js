const d = [[0, -1], [0, 1], [1, 0], [-1, 0]]
var numIslands = function(grid) {
    let m = grid.length
    if( m === 0) return 0
    let n = grid[0].length
    function blood(i, j) {
        grid[i][j] = 0
        for(let k = 0; k < 4; k++) {
            let i2 = d[k][0] + i
            let j2 = d[k][1] + j
            if (i2 < 0 || i2 >= m || j2 < 0 || j2 >= n) continue;
            if(grid[i2][j2] === "1") blood(i2, j2)
        }
    }
    let res = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            let cur = grid[i][j]
            if(cur === "1") {
                blood(i, j)
                res ++
            }
        }
    }
    return res;
};
