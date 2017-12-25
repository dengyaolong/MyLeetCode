function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var inorderTraversal = function(root) {
    if(!root) return []
    let q = [root]
    let res = [], max = Number.MIN_SAFE_INTEGER;
    while(q.length) {
        console.log(q)
        let cur = q.pop()
        if (cur.left) {
            if(cur.val > max) {
                q.push(cur)
                q.push(cur.left)
            } else {
                console.log(cur, q, 'sb')
            }
        } else {
            max = cur.val
            res.push(cur.val)
            if(cur.right) q.push(cur.right)
        }
    }
    return res
};

let n1 = new TreeNode(1)
let n2 = new TreeNode(2)
let n3 = new TreeNode(3)
n1.right = n2
n2.left = n3

console.log(inorderTraversal(n1))
