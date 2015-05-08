class Solution:
    # @param {integer[]} nums
    # @param {integer} target
    # @return {integer[]}
    def twoSum(self, nums, target):
        index = {}
        for i, num in enumerate(nums):
            if target-num in index:
                return [index[target-num] + 1, i + 1]
            index[num] = i
