var myPow = function(x, n) {
  let mp = new Map()
  function pow(k) {
    if(k === 0) return 1
    if(k === 1) return x
    if(mp.has(k)) {
      return mp.get(k)
    }
    let res = pow(k >> 1) * pow(k - (k >> 1))
    mp.set(k, res)
    return res
  }
  if(n < 0) return 1 / (pow(-(n>>1)) * pow((n>>1)-n))
  return pow(n)
};

