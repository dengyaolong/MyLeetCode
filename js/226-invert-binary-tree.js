var invertTree = function(root) {
  if(root == null){
    return null;
  }
  invertTree(root.left);
  invertTree(root.right);
  root.left = [root.right, root.right=root.left][0];
  return root;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function show(root) {
  if(root == null){
    return;
  }
  console.log(root['val']);
  show(root.left);
  show(root.right);
}
t = new TreeNode(1);
t1 = new  TreeNode(2);
t2 = new TreeNode(3);
t.left = t1;
t.right = t2;
show(t);
invertTree(t);
show(t);
