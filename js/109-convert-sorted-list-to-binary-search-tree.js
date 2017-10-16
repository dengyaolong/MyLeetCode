function bst(arr) {
  if(arr.length === 0) return null
  let m = arr.length >> 1
  let node = new TreeNode(arr[m])
  node.left = bst(arr.slice(0, m)) 
  node.right = bst(arr.slice(m + 1))
  return node
}
var sortedListToBST = function(head) {
  let arr = []
  while(head) {
    arr.push(head.val)
    head = head.next
  }
  return bst(arr)
};

