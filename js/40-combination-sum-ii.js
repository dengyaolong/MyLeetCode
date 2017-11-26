var combinationSum2 = function(candidates, target) {
    let res = []
    candidates.sort((l, r) => l - r)
    candidates = candidates.filter(c => c <= target)
    const flag = {}
    solve(target, [], candidates.length - 1)
    function solve(t, r, end) {
        if(t < 0) {
            return
        } else if(t === 0) {
            let key = r.join('.');
            if(!flag[key]) {
                res.push(r)
                flag[key] = true
            }
        } else {
            for(let i = end; i >= 0; i--) {
                let c = candidates[i]
                solve(t - c, [c].concat(r), i - 1)
            }
        }
    }
    return res
};
