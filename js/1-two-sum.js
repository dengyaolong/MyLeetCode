/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var numsPair = [];
  var numsN = nums.length;
  for (var i = 0; i < numsN  ; ++i) {
    numsPair[i] = [nums[i], i + 1];
  }
  var sortNumsPair = numsPair.sort(function(a, b){ return a[0] - b[0]; });
  for (var i = 0; i < numsN && sortNumsPair[0][0] + sortNumsPair[i][0] <= target; ++i) {
    var beg = i + 1 , end = numsN-1;
    var another = target - sortNumsPair[i][0];
    while (beg <= end) {
      var m = (beg + end) >> 1;
      if (sortNumsPair[m][0] == another) {
        return [sortNumsPair[m][1],sortNumsPair[i][1]].sort(function(a, b){ return a - b; });
      } else if (sortNumsPair[m][0] > another) {
        end = m - 1;
      } else {
        beg = m + 1;
      }
    }
  }
};
