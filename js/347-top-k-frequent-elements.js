var topKFrequent = function(nums, k) {
    let cnt = {} 
    nums.forEach(n => {
        if(cnt[n]) {
            ++cnt[n]
        } else {
            cnt[n] = 1
        }
    })
    let f = []
    for(let n in cnt) {
        f.push([n, cnt[n]])
    }
    f.sort((l, r) => r[1] - l[1])
    return f.slice(0, k).map(v => +v[0])
};
