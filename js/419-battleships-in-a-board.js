var countBattleships = function(board) {
    let count = 0, n = board.length, m = board[0].length;
    for(let i = 0; i < n; ++i){
        for(let j = 0; j < m; ++j) {
            if(board[i][j] === 'X' 
               && (i === 0 || board[i - 1][j] !== 'X')
               && (j === 0 || board[i][j - 1] !== 'X')) {
               count++
            }
        }
    }
    return count
};
