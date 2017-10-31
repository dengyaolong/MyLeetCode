var reconstructQueue = function(people) {
    let res = []
    for(let i = 0; i < people.length; i ++) {
        people[i][2] = people[i][1]
    }
    while(people.length) {
        let minI, minH = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < people.length; i ++) {
            if(people[i][1] == 0 && people[i][0] < minH) {
                minH = people[i][0]
                minI = i
            }
        }
        res.push([people[minI][0], people[minI][2]])
        people.splice(minI,1)
        for(let i = 0; i < people.length; i ++) {
            if(people[i][0] <= minH) {
                people[i][1] = people[i][1] - 1
            }
        }
    }
    return res
};
