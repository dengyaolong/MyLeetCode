# 题意
给定n，生成1-n以字典序顺序的数组。比如n=13。返回[1,10,11,12,13,2,3,4,5,6,7,8,9]. n最高到 5,000,000

# 解法
这道题比较简单，就是按顺序生成就可以。我这里没有用递归，空间复杂度稍微高一些.


* 9 -> 0开始递归
* 加入到res，递归生成
