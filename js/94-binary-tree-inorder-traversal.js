var inorderTraversal = function(root) {
    if(!root) return [];
    var stack = []
        , res = []
        , cur = root;

    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        var node = stack.pop();
        res.push(node.val);
        cur = node.right;
    }
    return res
};
