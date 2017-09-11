var uniquePathsWithObstacles = function(obstacleGrid) {
    let a = [];
    for(let i = 0, iLen = obstacleGrid.length; i < iLen; i++) {
        a[i] = a[i] || []
        for(let j = 0, jLen = obstacleGrid[i].length ; j < jLen; j++) {
            if(obstacleGrid[i][j]) {
                a[i][j] = 0
                if(i === 0) {
                    for(let k = j + 1 ; k < jLen; k++) {
                        a[0][k] = 0
                    }
                }
                if(j === 0) {
                    for(let k = i ; k < iLen; k++) {
                        a[k] = a[k] || []
                        a[k][0] = 0
                    }
                }
            }
            else if(j === 0 || i === 0) {
                if(a[i][j] === undefined) a[i][j] = 1
            }
            else {
                a[i][j] = a[i][j - 1] + a[i - 1][j]
            } 
        }
    }
    let row =  a[a.length - 1] || []
    return row[row.length - 1] || 0
};
