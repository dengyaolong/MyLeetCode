var constructMaximumBinaryTree = function(nums) {
    function generate(start, end, rootValue) {
        if(start > end) return null
        let maxInd = start
        for(let i = start; i <= end; i ++) {
            if (nums[i] > nums[maxInd]) {
                maxInd = i
            }
        }
        let node = new TreeNode(nums[maxInd])
        node.left = generate(start, maxInd - 1, nums[maxInd])
        node.right = generate(maxInd + 1, end, nums[maxInd])
        return node
    }
    return generate(0, nums.length - 1, 1)
};
