var preorderTraversal = function(root) {
  let res = []
  let nodes = root ? [root] : []
  while(nodes.length) {
    let cur = nodes.pop()
    res.push(cur.val)
    if(cur.right) {
      nodes.push(cur.right)
    }
    if(cur.left) {
      nodes.push(cur.left)
    }
  }
  return res;
};

