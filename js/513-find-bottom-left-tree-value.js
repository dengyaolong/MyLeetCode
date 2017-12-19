var findBottomLeftValue = function(root) {
    var cur = [], pre = [root]; 
    do{
        for(var i = 0; i < pre.length; i++) {
            var node = pre[i]
            if(node.left) {
                cur.push(node.left)
            }
            if(node.right) {
                cur.push(node.right)
            }
        }
    } while (cur.length && (pre = cur , cur = []))
    return pre[0].val
};

