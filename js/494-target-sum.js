function getDP(nums, start, end) {
  let dp = []
  dp[start] = [nums[start], -nums[start]]
  for (let i = start + 1; i < end; i++) {
    dp[i] = []
    let last = dp[i - 1],
      num = nums[i]
    for (let j = last.length - 1; j >= 0; j--) {
      dp[i].push(last[j] + num, last[j] - num)
    }
  }
  return dp.pop()
}
var findTargetSumWays = function(nums, S) {
  if(nums.length <= 1) {
    return +(nums[0] === S) + (-nums[0] === S)
  }
  let res = 0
  let firstMap = new Map() 
  let mid = nums.length >> 1
  let firstDP = getDP(nums, 0, mid)
  let secondDP = getDP(nums, mid, nums.length)
  for (let i = 0; i < firstDP.length; i++) {
    let s1 = firstDP[i]
    if (firstMap.has(s1)) {
      firstMap.set(s1, firstMap.get(s1) + 1)
    } else {
      firstMap.set(s1, 1)
    }
  }
  for (let i = 0; i < secondDP.length; ++i){
    let diff = S - secondDP[i]
    if(firstMap.has(diff)) {
      res += firstMap.get(diff)
    }
  }
  return res;
};

