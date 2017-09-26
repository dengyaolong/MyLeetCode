function Node(val, sortVal) {
  this.val = val
  this.sortVal = sortVal
}


Node.prototype.getVal = function() {
  return this.val
}

var findClosestElements = function(arr, k, x) {
  let nodes = []
  arr.forEach(a => {
    nodes.push(new Node(a, Math.abs(x - a)))
  })
  nodes.sort((lhs, rhs) => {
    return lhs.sortVal - rhs.sortVal
      || lhs.val - rhs.val
  })
  let res = nodes.slice( 0,k).map(node => node.getVal())
  res.sort((lhs, rhs) => lhs - rhs)
  return res
}; 
