var findDuplicate = function(nums) {
    let t = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if((t | nums[i]) === t) {
            for(let j = 0; j < i; j++) {
                if(nums[i] === nums[j]) {
                    return nums[i]
                }
            }
        }
        t = t|nums[i]
    }
};
