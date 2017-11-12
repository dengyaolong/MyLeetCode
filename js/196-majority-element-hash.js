var majorityElement = function(nums) {
  let count = new Map()
  let target = nums.length >> 1
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let cnt = 0
    if(count.has(num)) {
      cnt = count.get(num)
    }
    ++cnt
    if(cnt > target) {
      return num
    }
    count.set(num, cnt)
  }
};
