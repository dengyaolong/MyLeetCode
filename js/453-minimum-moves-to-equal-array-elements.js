var minMoves = function(nums) {
    nums.sort((l, r) => l - r)
    let cnt = 0
    for(;;) {
        let start = nums[0], end = nums[nums.length - 1]
        if(start == end) return cnt
        ctn += end - start
        nums.pop()
        nums.unshift(start)
    } 
};
