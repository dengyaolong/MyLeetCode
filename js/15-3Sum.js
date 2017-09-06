/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function deal(nums, indexMap) {
    var res = []
    var map = {}
    for(var i = 0; i < nums.length; i++) {
        var num = nums[i]
        let m = map[num] || 0
        if(m > 2) continue
        map[num] =  m + 1
        res.push(num)
    }
    res.sort((lhs, rhs ) => lhs - rhs)
    return res
}
var threeSum = function(initNums) {
    var map = {}
    var nums = deal(initNums,map)
    for(var i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    var res = []
    for(var i = 0; i < nums.length; i++) {
        var maxIndex = nums.length 
        var flag = false
        var target = - nums[i]
        for(var j = i + 1; j < maxIndex ;  j++) {
            var current = nums[j] 
            var diff =  target - current
            if(!map[diff])  continue

            maxIndex = map[diff]
            if(j < maxIndex) {
                flag = true
                res.push([nums[i], current, nums[maxIndex]])
                j = map[current]
            }
        }
        if(flag) i = map[nums[i]]
    }
    return res
};


