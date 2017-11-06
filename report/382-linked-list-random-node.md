# 题意
给定一个list，要你随机返回一个list的val。要求每个值出现的几率是相同的，同时不要使用额外的空间。（其实含义就是：不要用转为数组，随机生成下标这种方法）


# 解法
这是一道很有趣的概率题。整个思路就是：

* 取第一个数为结果
* 用1/k概率，替换当前结果

可能有些同学看着有点懵吧，简单推导一下：

第k个数出现的概率= 第k次替换结果概率 * 后面不被替换的概率 = (1/k)  * k/(k + 1) * ... * (n-1)/n = 1/n

这就是典型的0空间求一个随机数的问题。