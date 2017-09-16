function fourSumCount(a, b, c, d) {
    let f2 = []
    let res = 0
    let mp = new Map();
    let N = a.length
    for(let i = 0; i < N; ++i) {
        for(let j = 0; j < N; ++j) {
            f2.push(a[i] + b[j])
            let s2Sum = c[i] + d[j]
            if(mp.has(s2Sum)) {
                mp.set(s2Sum, mp.get(s2Sum) + 1)

            } else {
                mp.set(s2Sum, 1)

            }

        }

    }
    for(let i = f2.length - 1; i >= 0; --i) {
        let target = -f2[i]
        if(mp.has(target)) {
            res += mp.get(target)

        }

    }
    return res

}
