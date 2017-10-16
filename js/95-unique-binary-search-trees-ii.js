function bst(arr) {
  if(arr.length === 1) {
    return [new TreeNode(arr[0])]
  }
  let res = []
  for(let i = 0; i < arr.length; i ++) {
    let lefts = bst(arr.slice(0, i))
    let rights =  bst(arr.slice(i + 1))
    for(let j = 0; j < Math.max(lefts.length, 1); j++) {
      let left = lefts[j] || null
      for(let k = 0; k < Math.max(rights.length, 1); k++) {
        let right = rights[k] || null
        let node = new TreeNode(arr[i])
        node.left = left
        node.right = right
        res.push(node)
      }
    }
  }
  return res
}
var generateTrees = function(n) {
  let arr = Array.from({length: n}, (a, i) => i + 1)
  return bst(arr)
};

