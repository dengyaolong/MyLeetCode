var lowestCommonAncestor = function(root, p, q) {
    let vp = p.val, vq = q.val;
    if(vp > vq) {
        vp = vp ^ vq ^ (vq = vp)
    }
    function trace(node) {
        if(!node) return null
        if(node.val >= vp && node.val <= vq) {
            return node
        }
        if(node.val > vq) {
            return trace(node.left)
        }
        return trace(node.right)
    }
    return trace(root)
};

