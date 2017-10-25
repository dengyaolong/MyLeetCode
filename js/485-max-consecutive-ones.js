var findMaxConsecutiveOnes = function(nums) {
    let pos = 0, offset = 0, max = 0
    while(pos + offset < nums.length) {
        while(nums[pos + offset] === 1) {
            offset++
        }
        if(max < offset) max = offset;
        pos += offset + 1
        offset = 0
    }
    return max
};
