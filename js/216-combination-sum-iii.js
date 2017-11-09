var combinationSum3 = function(k, n) {
  if(k > 9) return []
  let res = []
  function dfs(k, n,ceil, cur) {
    if(k === 0 && n === 0) {
      res.push(cur)
      return
    }
    let min = (k - 1) * k / 2
    for(let i = Math.min(ceil, n - min); i >= 1; i--)　{
      if(n - i >= min) {
        dfs(k - 1, n - i, i - 1, [i].concat(cur))
      }
    }
  }
  dfs(k, n, 9,[])
  return res
};
