# 题意
给定n，表示有[0,1,2,...,n-1]课程。之后给定[[i, j]]，表示学i前需要学j。

求输出一个可行的学习顺序，否则返回[]

比如n = 4, pre = [[0,1], [0, 2], [1, 3]]

则返回 [3, 1, 2, 0]或者[3,2,1,0]

# 解法

学过离散数据结构的同学一眼就看得出来这是一道拓扑排序的题目。

* 我们先定义入度为指向自己的顶点个数（ 每一对[i, j]都能让j入度加一）,比如0入度为2
* 查找入度为0的元素
* 因为不依赖任何课程，所以直接压进结果数组
* 随后将该元素指向的所有顶点，入度都减一
* 循环到结果集长度=n, 但是在未凑够结果集前，发现找不到入度为0的顶点则返回[] ，这种情况就是异常，出现了循环
