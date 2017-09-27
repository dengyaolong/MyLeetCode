var addOneRow = function(root, v, td) {
    function dfs(node, d) {
        if(d + 1 === td) {
            return insertNode(node)
        }
        if(d > td || !node) return
            dfs(node.left, d + 1)
            dfs(node.right, d + 1)
        
    }
    function insertNode(node) {
        if(!node) return 
        let {left, right} = node
        let newLeftNode = new TreeNode(v)
            , newRightNode = new TreeNode(v)
       
        node.left = newLeftNode
        node.right = newRightNode   
        newLeftNode.left = left
        newRightNode.right = right
    }
    if(td === 1) {
        let res = new TreeNode(v)
        res.left = root
        return res
    }
    dfs(root, 1)
    return root
};
