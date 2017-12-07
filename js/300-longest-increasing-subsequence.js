var lengthOfLIS = function(nums) {
  let res = 0
  for(let i = start; i < nums.length; i ++) {
    let cur = nums[i], len =  1
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[j] > cur) {
        len ++
        cur = nums[j]
      }
    }
  }

};
