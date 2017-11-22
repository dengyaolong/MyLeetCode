var findMinDifference = function(timePoints) {
    if(timePoints.length > 60 * 24) return 0
    let mins = timePoints.map(timePoint => {
        let [h, m] = timePoint.split(':')
        return  (+h * 60) + (+m)
    })
    mins.sort((l,r) => l - r)
    for(let i = 0; i < timePoints.length; i++) {
        mins.push(mins[i] + 60 * 24)
    }
    let diff = 9999;
    for(let i = 1; i < mins.length; i++) {
        let curDiff = mins[i] - mins[i - 1]
        if(curDiff < diff) diff = curDiff
    }
    return diff
};
