var twoSum = function(nums, target) {
  var index = [];
  for (var i = 0; i < nums.length; ++i) {
      var j = index[target-nums[i]];
      if (typeof j != "undefined") {
          return [j + 1, i + 1];
      }
      index[nums[i]] = i;
  }
};
