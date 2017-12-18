var dailyTemperatures = function(t) {
  if (t.length === 0) return []
  let res = [],    
    ids = [0],
    min = t[0]
  for (let i = 1; i < t.length; i++) {
    if (t[ids[ids.length - 1]] >= t[i]) {
      ids.push(i)
      min = t[i]
    } else {
      while (ids.length && t[ids[ids.length - 1]] < t[i]) {
        let id = ids.pop()
        res[id] = i - id
      }
      min = t[i]
      ids.push(i)
    }
  }
  while (ids.length) {
    let id = ids.pop()
    res[id] = 0
  } 
  return res
};
