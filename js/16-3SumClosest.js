/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumClosest = function(nums, t) {
    var sum = 0
    var doubleSumMap = {}

    function binaryQuery(l, r, t) {
        if(r - l <= 1) {
            return [l, r]
        }
        let m = (l + r) / 2
        if(nums[m] < t) {
            return binaryQuery(m, r, t)
        }
        if(nums[m] > t) {
            return binaryQuery(l, m, t)
        }
    }
    for(var i = 0; i < nums.length - 1; ++i) {
        for(var j = i; j < nums.length; ++j) {
            let len = t -  nums[i] - nums[j]
            doubleSumMap[AB] = [i, j]
        }
    }
    let minLen = 
    for(var i = 0; i < nums.length; ++i) {

    }
};



