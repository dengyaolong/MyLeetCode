var singleNonDuplicate = function(nums) {
        return nums.reduce((xor, t) => t ^ xor, 0)
};
