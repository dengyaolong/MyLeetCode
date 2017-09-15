function numCompare(lhs, rhs) {
    return lhs - rhs
}

function fourSum(nums, target) {
    nums.sort(numCompare)
    let uniq = {}
    let res = []
    for(let i = 0, iLen = nums.length; i < iLen - 3; i++) {
        for(let j = i + 1; j < iLen - 2; j++) {
            let f2 = nums[i] + nums[j]
            let diff = target - f2 
            let k = j + 1, l = iLen - 1
            while (k < l) {
                let l2 = nums[k] + nums[l] 
                if(l2 === diff) {
                    let r = [nums[i], nums[j], nums[k], nums[l]]
                    let key = r.join(' ')
                    if(!uniq[key]) {
                        res.push(r)
                        uniq[key] = 1
                    }
                    k++, l--
                } else if (l2 > diff) {
                    l --
                } else {
                    k ++
                }
            }
        }
    }
    return res
}
