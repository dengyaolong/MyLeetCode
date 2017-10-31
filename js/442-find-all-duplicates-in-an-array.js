var findDuplicates = function(nums) {
    let res = []
    for(let i = 0; i < nums.length; i ++) {
        if(nums[i] < 1) {
            continue
        }
        let n = nums[i]
        let mapInd = n - 1
        if (nums[mapInd] == -1) {
            res.unshift(n)
            nums[i] = 0
        } else {
            let tmp = nums[mapInd]
            nums[i] = tmp
            nums[mapInd] = -1
            i --
        }
    }
    return res
};
