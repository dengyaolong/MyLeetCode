#!/usr/bin/env python
class Solution:
    # @param {integer[]} nums1
    # @param {integer[]} nums2
    # @return {float}
    def findMedianSortedArrays(self, nums1, nums2):
        num = sorted(nums1 + nums2)
        if len(num) % 2:
            return num[len(num)/2]
        else :
            return (num[len(num)/2]+num[len(num)/2-1])/2.0

s = Solution()
print s.findMedianSortedArrays([1,2,5],[3,4]);
print s.findMedianSortedArrays([],[3,4]);

