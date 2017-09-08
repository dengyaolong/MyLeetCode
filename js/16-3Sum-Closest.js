var threeSumClosest = function(nums, target) {
  nums.sort((lhs, rhs) => lhs - rhs)

  function getMinDiff(c, i, j) {
    let l = 0,
      r = nums.length - 1
    let minDiff = null;

    function calDiff(k) {
      if (k === i || k === j || k >= nums.length || k < 0) {
        return
      }
      let diff = nums[k] - c
      if ( Math.abs(diff)< Math.abs(minDiff) || minDiff == null) {
        minDiff = diff
      }

    }

    function setDiff(k) {
      calDiff(k)
      calDiff(k - 1)
      calDiff(k + 1)
    }
    while (r - l > 1) {
      let m = Math.floor((l + r) / 2)
      setDiff(m)
      if (nums[m] === c) {
        break
      } else if (nums[m] > c) {
        r = m
      } else if (nums[m] < c) {
        l = m
      }
    }
    return minDiff
  }

  let minDiff = null;
  let res = null
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length  - 1; j++) {
      let AB = nums[i] + nums[j]
      let diff = getMinDiff(target - AB, i, j)
      if (minDiff === null || Math.abs(diff) < Math.abs(minDiff)) {
        minDiff = diff
        if (diff === 0 ) return target 
        res = diff + target
      }
    }
  }
  return res
};
