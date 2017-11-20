var exclusiveTime = function(n, logs) {
    let res = Array.from({length: n}, a => 0)
    let pre = []
    for(let i = 0; i < logs.length; i++) {
        let [id, status, ts] = logs[i].split(':')
        if(status === 'start') {
            if(pre.length) {
                let cur = pre[pre.length - 1]
                res[cur.id] += ts - logs[i - 1].split(':')[2] + (logs[i - 1].split(':')[1] === 'end' ? -1 : 0)
            }
            pre.push({id, ts, i})
        } else {
            let p = pre.pop()
            res[id] += ts - logs[i - 1].split(':')[2] + (logs[i - 1].split(':')[1] === 'start' ? 1 : 0)
        }
    }
    return res
};
