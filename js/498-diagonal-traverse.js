var findDiagonalOrder = function(matrix) {
  if(matrix.length === 0) return []
  let d = [[-1, 1], [1, - 1]]
  let x = 0, y = 0;
  let res = []
  let n = matrix.length, m = matrix[0].length, cur = 0
  function xInRange(x) {
    return x < n && x >= 0
  }
  function yInRange(y) {
    return y >= 0 && y <m
  }
  let redirect = false 
  while(res.length != n * m){
    let isLegalX = xInRange(x)
    let isLegalY = yInRange(y)
    if(isLegalX && isLegalY){
      redirect = true
      res.push(matrix[x][y])
    }
    if(!isLegalX && !isLegalY && redirect){
      redirect = false
      cur ^= 1
      x ++
    }
    x += d[cur][0], y += d[cur][1];

  }
  return res
};

