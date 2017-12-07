var coinChange = function(coins, amount) {
  coins.unshift(0)
  var dp = Array.from({length: coins.length}, 
    () => Array.from({length: amount}, a => 0))
  for(let i = 1; i <= coins.length; i++) {
    for(let j = 0; j <= amount; j++) {
      for(let k = 0; k * coins[i] <= j; k++) {
        console.log(i,j,k)
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - k * coins[i]] + 1)
      }
    }
  }
  console.log(dp)
};

console.log(coinChange([1,2,5], 11))
console.log(coinChange([1,2,5], 7))
console.log(coinChange([1,2,5], 1))
