var serialize = function(root) {
  if(!root) return ""
  let res = {};
  function generate(node, i) {
    res[i] = node.val
    if(node.left) {
      generate(node.left, i + "0")
    }
    if(node.right) { 
      generate(node.right, i + "1")
    }
  }
  generate(root, "1")
  return JSON.stringify(res)
};

var deserialize = function(data) {
  if(!data) return null
  data = JSON.parse(data)
  let iters = Object.keys(data)
  iters.sort((l,r) => l.length - r.length || l[0] - r[0])
  let root = new TreeNode(iters[0])
  let mp = {}
  mp[1] = root
  for(let i = 1; i < iters.length; i++) {
    let iter = iters[i]
    let cur = new TreeNode(data[iter])
    mp[iter] = cur
    let parent = mp[iter.slice(0, iter.length - 1)]
    if(!parent) {
      console.log(parent, iter, mp)
    }
    if(iter[iter.length - 1] === "1") {
      parent.right = cur
    } else {
      parent.left = cur
    }
  }

  return root
};

function TreeNode(val) {
  this.val = val
  this.left = this.right =null
}
let root = new TreeNode(1)
let aleft = new TreeNode(2)
let aright = new TreeNode(3)
let sleft = new TreeNode(4)
let sright = new TreeNode(5)
aright.left = sleft
aright.right = sright
root.left = aleft
root.right = aright
let t = []
for(let i = 1; i < 1000; i++) {
  let now = new TreeNode(i)
  t[i] = now
  if(i > 1) {
    t[i - 1].right = t[i]
  }
}

console.log(serialize(t[1]))
console.log(deserialize(serialize(t[1])))
