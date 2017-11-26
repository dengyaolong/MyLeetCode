var combinationSum = function(candidates, target) {
    let res = []
    candidates.sort((l, r) => l - r)
    candidates = candidates.filter(c => c <= target)
    solve(target, [], candidates.length - 1)
    function solve(t, r, end) {
        if(t < 0) {
            return
        } else if(t === 0) {
            return res.unshift(r)
        } else {
            for(let i = end; i >= 0; i--) {
                let c = candidates[i]
                solve(t - c, [c].concat(r), i)
            }
        }
    }
    return res
};
