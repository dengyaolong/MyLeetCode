var deleteNode = function(root, key) {
    let tree = new TreeNode(Number.MAX_SAFE_INTEGER)
    tree.left = root
    let cur = root, pre = tree
    let flag = false
    while(cur) {
        if(key == cur.val) {
            // equal and delte
            flag = true
            break;
        } else if(key < cur.val){
            pre = cur
            cur = cur.left
        } else {
            pre = cur
            cur = cur.right
        }
    }

    if(flag) {
        if(cur.val > pre.val) {
            // 右子树
            if(cur.right) {
                pre.right = cur.right
                if(cur.left) {
                    let findLeft = cur.right
                    while(findLeft.left) {
                        findLeft = findLeft.left
                    }
                    findLeft.left = cur.left
                }
            } else if(cur.left) {
                pre.right = cur.left
            } else {
                pre.right = null
            }
        } else {
            // 左子树
            if(cur.left) {
                pre.left = cur.left
                if(cur.right) {
                    let findRight = cur.left
                    while(findRight.right) {
                        findRight = findRight.right
                    }
                    findRight.right = cur.right
                }
            } else if(cur.right) {
                pre.left = cur.right
            } else {
                pre.left = null
            }
        }
    }
    return tree.left
};
