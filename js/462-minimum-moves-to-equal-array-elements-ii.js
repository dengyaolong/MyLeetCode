var minMoves2 = function(nums) {
  nums.sort((l, r) => l - r)
  let mid = nums[nums.length >> 1]
  return nums.reduce((sum, cur) => sum += Math.abs(cur - mid), 0)
}
