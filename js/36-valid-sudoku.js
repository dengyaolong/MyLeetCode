var isValidSudoku = function(board) {
    function check(arr) {
        let dp = {}
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === '.') continue
            if(dp[arr[i]]) return false
            dp[arr[i]] = 1
        }
        return true
    }
    for(let i = 0; i < 9; i+= 3) {
        for(let j = 0; j < 9; j+= 3) {
            let bd = [0, 1, 2].reduce(function (pre, k) {
                return pre.concat(board[i + k].slice(j, j + 3))
            }, [])
            if(!check(bd)) return false
        }
    }
    for(let i = 0; i < 9; i++) {
        let bd = []
        for(let j = 0; j < 9; j++) {
            bd.push(board[i][j])
        }
        if(!check(bd)) return false
    }
    for(let i = 0; i < 9; i++) {
        let bd = []
        for(let j = 0; j < 9; j++) {
            bd.push(board[j][i])
        }
        if(!check(bd)) return false
    }
    return true
}

