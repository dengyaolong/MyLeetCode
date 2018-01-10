var permute = function(nums) {
  let res = []
  if(nums.length === 0) return res
  function dfs(cur, arr) {
    if(arr.length === 1) {
      res.push(cur.concat(arr))
      return
    } 
    for(let i = 0; i < arr.length; i ++) {
      dfs(cur.concat(arr[i]), arr.slice(0, i).concat(arr.slice(i+1, arr.length)))
    }
  }
  dfs([], nums)
  return res
};
