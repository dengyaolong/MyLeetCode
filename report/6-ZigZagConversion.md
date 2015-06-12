#ZigZag Conversion
##题意
给定一个字符串L,按ZigZag方式连接后，按行输出。
具体就是： 走V字型的读取。
比如ABCDEFGHI，nrows=3，那么N字摆布后是
A E I
BDFH
C G
最后按行读取-> AEIBDFHCG

##思路
明显一个V是一小段，整个Zigzag是按多个V组成的，所以考虑一个V后，之后走循环就可
以了。

那么先走V的左边，明显是递增的，而V的另外一段是递减的
(注意，V的长度是2\*nRows-2,因为V右端少了一底一头)


