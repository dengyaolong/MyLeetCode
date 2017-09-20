let toC = [[]]
for(let i = 1; i < 16; i ++) {
    let tmp = []
    for(let j =1; j < 16; j++) {
        if(i % j === 0 || j % i === 0) {
            tmp.push(j)
        }
    }
    toC[i] = tmp
}

var countArrangement = function(N) {
    let r = 0
    function generate(cur, chooseNum) {
        if(cur === N) {
            r++
            return
        }
        let curI = N - cur
        let curToC = toC[curI].filter(a => {
            return a <= N && chooseNum.indexOf(a) == -1
        })
        curToC.forEach(a => {
            generate(cur + 1, chooseNum.concat(a), N, r)
        })
    }
    generate(0, [])
    return r
}
