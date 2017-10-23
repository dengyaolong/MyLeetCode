var largestValues = function(root) {
    if(!root) return []
    let row = [root]
    let res = []
    while(row.length) {
        let next = []
        let max = Number.MIN_SAFE_INTEGER
        for(let i = 0; i < row.length; i ++) {
            let {left, right, val} = row[i]
            left && next.push(left)
            right && next.push(right)
            if(max <= val) {
                max = val
            }
        }
        row = next
        res.push(max)
    }
    return res
}
