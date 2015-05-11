#Longest-Substring-Without-Repeating-Characters

##题意
找一个最长子串，使得子串的每一个字符都是唯一得。
比如aaa,最长子串唯一字符子串是a
比如adav,最长子串唯一字符子串是dav

##方法
我目前的方法是:

1. 设当前头指向head,尾指向为tail,当前的符合子串长度为tmp，最大的结果为res,记录位置哈希为hash
2. tail从0开始，判断当前字符s[tail]：
    × 如果当前字符串没有出现过，tmp++,hash[s[tail]]=tail
    × 如果出现了，从head到hash[s[tail]]得哈希均清空,tail--，最后head=hash[s[tail]]
3. tmp++,tail++（因为当前字符是算的）
4. res = max(res, tmp) （简单的动态规划）

##效果
效果不是很好啊，明天改进
