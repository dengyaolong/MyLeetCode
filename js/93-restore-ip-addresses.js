var restoreIpAddresses = function(s) {
  let len = s.length;
  function judge(a) {
    return ((a.length > 1 && a[0] == 0 )|| +a > 255)
  }
  function dfs(i, j, k) {
    if(i != undefined) {
      let a = s.slice(0, i)
      if(judge(a)) return

      if(j != undefined) {
        let b = s.slice(i, j)
        if(judge(b)) return
        if(k != undefined) {
          let c = s.slice(j, k)
          if(judge(c)) return
          let d = s.slice(k) 
          if(judge(d)) return
          res.push([a,b,c,d].join("."))
        } else {
          for(let k = j + 1; k < len && k < j + 4 ; k++) {
            dfs(i, j, k)
          }
        }
      } else {
        for(let j = i + 1; j < len - 1 && j < i + 4 ; j++) {
          dfs(i, j)
        }
      }
    } else {
      for(let i = 1; i < len - 2 && i < 4;i++) {
        dfs(i)
      }
    }
  }     
  let res = []
  dfs()
  return res
};

