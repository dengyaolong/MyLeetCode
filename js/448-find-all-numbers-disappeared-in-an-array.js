var findDisappearedNumbers = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if(num - 1 != i) {
      if(nums[num - 1] > 0) {
        let tmp = nums[num - 1]
        nums[num - 1] = -1
        nums[i] = tmp
        i --
      }
    } else {
      nums[i] = -1
    }
  }     
  let res = []
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== -1) res.push(i + 1)
  }
  return res
};
