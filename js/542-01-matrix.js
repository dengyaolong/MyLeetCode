var updateMatrix = function(matrix) {
    let n = matrix.length, m = matrix[0].length
    let res = []
    function illegal(i, j) {
        return i >= n || j >= m || i < 0 || j < 0
    }
    function setValue(i, j , val) {
        if(!illegal(i, j)) {
            res[i][j] = Math.min(res[i][j], val)
        }
    }
    
    function flood(i, j, cur, dx, dy) {
        let cnt = 0
        while(!illegal(i += dx, j += dy) && res[i][j] > cur && ++cnt ) {
            setValue(i, j, cur + cnt)
        }
    }

    for(let i = 0; i < n; ++i) {
        res[i] = []
        for(let j = 0; j < m; ++j) {
            if(matrix[i][j] === 0) {
                res[i][j] = 0
            } else {
                res[i][j] = Number.MAX_SAFE_INTEGER
            }
        }
    }

    let curMin = 0
    function getMin() {
        let min = Number.MAX_SAFE_INTEGER
        for(let i = 0; i < n; ++i) {
            for(let j = 0; j < m; ++j) {
                if(res[i][j] > curMin && res[i][j] < min) {
                    min = res[i][j]
                }
            }
        }
        return min
    }
    
    while(1) {
        for(let i = 0; i < n; ++i) {
            for(let j = 0; j < m; ++j) {
                if(res[i][j] === curMin){
                    flood(i, j, curMin, 1, 0)
                    flood(i, j, curMin, -1, 0)
                    flood(i, j, curMin, 0, 1)
                    flood(i, j, curMin, 0, -1)
                }
            }
        }
        curMin = getMin()
        if(curMin === Number.MAX_SAFE_INTEGER) {
            break
        } 
    }
    return res
};
