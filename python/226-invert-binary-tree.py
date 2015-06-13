# Definition for a binary tree node.
class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None
  def show(self):
    print self.val
    if self.left is not None:
      self.left.show()
    if self.right is not None:
      self.right.show()
    

class Solution:
  # @param {TreeNode} root
  # @return {TreeNode}
  def invertTree(self, root):
    if root is None:
      return root
    self.invertTree(root.left);
    self.invertTree(root.right);
    root.left,root.right = root.right,root.left
    return root

t=TreeNode(1)
s = Solution()
s.invertTree(t);
t.show()


