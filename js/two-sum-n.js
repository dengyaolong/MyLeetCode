/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var index = [];
  var numsN = nums.length;
  for (var i = 0; i < numsN  ; ++i) {
    index[nums[i]] = i;
  }
  for (var i = 0; i < numsN; ++i){
      var j = index[target-nums[i]];
      if (j !== undefined && j != i) {
          return i  < j ? [i + 1, j + 1] : [j + 1, i + 1];
      }
  }
};
