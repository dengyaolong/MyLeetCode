var findOrder = function(numCourses, prerequisites) {
    let res = []
    let degree = Array.from({length: numCourses}, a => 0)
    let road = []
    for(let i = 0; i < prerequisites.length; i ++) {
        let [cur, pre] = prerequisites[i]
        if(!road[cur]) {road[cur] = []}
        road[cur].push(pre)
        if(degree[pre]) {
            ++degree[pre]
        } else {
            degree[pre] = 1
        }
    }
    while(res.length != numCourses) {
        let flag = false
        for(let i = 0; i < numCourses; ++i) {
            if(degree[i] === 0) {
                flag = true
                let adj = road[i] || []
                for(let j = 0; j < adj.length; j++) {
                    degree[adj[j]] --
                }
                degree[i] = -1
                res.push(i)
            }
        }
        if(!flag) return []
    }
    return res.reverse()
};

