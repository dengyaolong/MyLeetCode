var majorityElement = function(nums) {
  let major, cnt = 0
  for(let i = 0; i < nums.length; i++) {
    if(cnt === 0) {
      major = nums[i]
      cnt = 1
    } else if (nums[i] !== major) {
      cnt --
    } else {
      cnt ++
    }
  }
  return major
};
