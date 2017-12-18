var maxDepth = function(root) {
  let res = 0
  function dfs(node, h) {
    if(!node) return
    if(h > res) res = h
    dfs(node.left, h + 1)
    dfs(node.right, h + 1)

  }
  dfs(root, 1)
  return res
};
