# 题意
给定一个数字num， 求0 - num，每个数二进制的1的个数。

比如5，要返回[0, 1, 2, 3, 4, 5]对应的二进制1的个数。即：[0, 1, 1, 2, 1, 2]


# 解法
获取单个数字的二进制数非常简单。再加个循环就可以做这题，也不会超时。但是，作者建议用o(N)的来做。( 这是一道好题 )

如果是老司机，这题一看就知道用dp了。所以我简单在纸上写了一下。发现了2个规律。

规律1：

dp[i] = dp[i >> 1] + (i & 1)

这个很好理解啊。每个数都 = ((num >> 1) << 1) + 最后一位 。对应的个数就是上面公式了。

比如1011 = ((101 << 1) << 1)  + 1

所以1011的1个数 = 101的个数 + 1

规律2：

dp.sub(1 << n, 1 << (n + 1)) = dp.sub( i << (n - 1), dp(i << n) ) + dp.sub( i << (n - 1), dp(i << n)).map(+1)

大概规律就是

* n = 0; [0, 1] 
* n = 1; [] + [1,2],
* n = 2; [1, 2] + [2, 3]
* n = 3; [1, 2, 2, 3] + [2, 3, 3, 4]

以此类推




