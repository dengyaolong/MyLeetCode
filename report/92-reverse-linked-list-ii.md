# 题意
给定一个链表，要求从翻转第n到m的接口。


# 解法
我的做法是用栈，之后翻转。

为了写得更舒服，我用了一个哨兵。new了一个root，root.next = head。之后n++， m++, 最后返回root.next就可以了(想一想为什么)

首先遍历n次得到翻转起始节点s，之后从n到m把节点入栈。拿到翻转的结尾e。

之后s = s.next = stack.pop()

s.next = e

return root.next



