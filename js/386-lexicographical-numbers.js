var lexicalOrder = function(n) {
    if(n < 1) return []
    let res = [], q = []
    for(let i = Math.min(9, n); i > 0; i--) {
        q.push(i)
    }
    while(q.length) {
        let cur = q.pop()
        res.push(cur)
        for(let i = 9; i >= 0; i--) {
            let newNum =  cur * 10 + i
            if(newNum <= n) {
                q.push(newNum)
            }
        }
    }
    return res
};
