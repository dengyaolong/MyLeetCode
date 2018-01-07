var findLengthOfLCIS = function(nums) {
    if(nums.length === 0) return 0
    let start = 0, res = 0
    nums.push(Number.MIN_SAFE_INTEGER)
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > nums[i - 1]) continue
        res = Math.max(res, i - start)
        start = i
    }
    return res
};
