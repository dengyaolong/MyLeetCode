var findTargetSumWays = function(nums, S) {
    let sum = nums.reduce((sum, n) => sum + n, 0)
    let V = S + sum
    if(S > sum || S < - sum || (V & 1)) return 0
    V >>= 1
    let dp = Array.from({length: V + 1}, (a, i) => +!i)
    for(let i = 0; i < nums.length; i++) {
        for(let j = V; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
    }
    return dp[V]
};
