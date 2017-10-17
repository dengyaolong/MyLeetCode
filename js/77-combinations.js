var combine = function(n, k) {
    let res = []
    let q = [{
        combined: [],
        ind: 0
    }]
    while(q.length) {
        let {ind, combined} = q.pop()
        if(combined.length === k) {
            res.push(combined)
        } else {
            for(let i = n - k + combined.length + 1; i > ind; --i) {
                q.push({
                    ind: i,
                    combined: combined.concat(i)
                })
            }
        }
    }
    return res
};
