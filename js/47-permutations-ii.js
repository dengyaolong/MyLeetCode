var permuteUnique = function(nums) {
  let res = []
  if(nums.length === 0) return res
	let memorize = new Map()
  function dfs(cur, arr) {
    let key = cur.join('_')+'_'+arr.join('_')
    if(memorize.has(key)) {
      return
    } 
    if(arr.length === 1) {
      res.push(cur.concat(arr))
      memorize.set(key)
      return
    } 
    for(let i = 0; i < arr.length; i ++) {
      dfs(cur.concat(arr[i]), arr.slice(0, i).concat(arr.slice(i+1, arr.length)))
    }
  }
  dfs([], nums)
  return res
};
