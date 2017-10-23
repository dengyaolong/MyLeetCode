# 题意
给定一个二叉树，找出每层最大的节点val

# 解法
经典的bfs+动态规划

用两个队列来装node, 第一个队列row作为当前遍历节点，第二个队列next作为下一次要遍历的节点。

* 初始化状态就是row = [root], next = []
* 遍历row，将子节点都压进next, 同时动态比较得出max
* row = next , next = []

