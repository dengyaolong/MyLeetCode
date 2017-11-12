var majorityElement = function(nums) {
  let count = new Map()
  let res = []
  let target = Math.floor(nums.length / 3)
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let cnt = 0
    if(count.has(num)) {
      cnt = count.get(num)
    }
    ++cnt
    if(cnt > target) {
      res.push(num)
            count.set(num, Number.MIN_SAFE_INTEGER)
    } else {
            count.set(num, cnt)
    }
  }
  return res
};
