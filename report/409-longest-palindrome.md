# 题意
给定一个子串，随意组合字符串，求组成的最长的回文串长度。比如"abccd" => 3("cac")

# 解法
简单的题目，思路就是hash。每次出现过，就+2,  之后hash置为0。

最后Math.min(res + 1, length)
