# 题意
给定一个没有任何分割的字符串代表ip, 要你找出所有合理的分割情况.比如"255255111", 返回["255.255.1.11", "255.255.11.1"]

# 解法
这道题是dfs绝对没毛病, 难点就是考虑0的情况. 基本上考虑到

"0000"以及"01000", 基本能过
