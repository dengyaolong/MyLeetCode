# 题意
给定一个list, 要删除从后面数起第n个节点. 

# 解法
这是一道看起来非常简单, 但是写起来问题可能会很多的题目.超级适合做面试题.

只要要考虑好，基本就是一次AC．(吹一下，我的解法竟然击败了100%的js答案)

* 删除第一个节点
* 删除最后一个节点
* 中间节点

删除节点的姿势也比较简单了: 删除node, 需要他父节点parentNode. parentNode.next = node.next即可.　(像C/CPP等手动GC的话需要释放node)

我这里用的姿势:

* 创建一个多余节点root , 并且root.next = head (哨兵编程)
* 定义三个节点fast = head, slow = head, pre = root．
* 让fast执行n次next
* 同时更新pre, fast和slow，pre. 直到fast到尽头．（这是slow刚好差n次）
* pre.next = slow.next
* 返回root.next


