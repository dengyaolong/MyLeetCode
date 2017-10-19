var findTargetSumWays = function(nums, S) {
    let sum = nums.reduce((sum, n) => sum + n, 0)
    let V = S + sum
    if(S > sum || S < - sum || (V & 1)) return 0
    V >>= 1
    let dp = [[1]]
    for(let i = 1; i <= nums.length; i++) {
        dp[i] = []
        for(let j = 0; j <= V; j ++) {
            dp[i][j] = (dp[i - 1][j] || 0)  
                + (dp[i - 1][j - nums[i - 1]] || 0)
        }
    }
    return dp[nums.length][V]
};

