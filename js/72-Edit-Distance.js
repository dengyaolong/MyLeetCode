var minDistance = function(word1, word2) {
    let dp = []
    for(let i = 0; i <= word1.length; ++i) {
        dp[i] = []
        for(let j = 0; j <= word2.length; ++j) {
            if(i === 0) {
                dp[i][j] = j
            } else if(j === 0) {
                dp[i][j] = i
            } else {
                let mins = [
                    dp[i][j - 1] + 1, 
                    dp[i - 1][j] + 1
                    dp[i - 1][j - 1] + (word1[i] === word2[j])
                ]
                dp[i][j] = Math.min.apply(null, mins)
            }
        }
    }
    return dp[word1.length][word2.length]
}
