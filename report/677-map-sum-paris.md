# 题意
设计一个数据结构,支持insert和sum两种操作.

insert操作是插入一对key,val, key是字符串,val是数. 如果key重复,后者覆盖前者

sum操作的参数是字符串p, 求key以p为前缀的所有val的和. 比如

```
 insert("apple", 3 )
 insert("apen", 5)
 sum("ap") => 8
 insert("apen", 8)
 sum("ap") => 11
 sum("apen") => 8
```

# 解法
这道题一看就是觉得是trie树...

我的思路是:

创建一个key2Sum, 创建一个key2Val

insert

* 每次插入, 把所有prefix子串 + val, key2Sum[substring] += val
* 当然了, 因为有了override这个操作,所以我在key2Val还存了(k, v), 如果出现过, 我们不然直接+val, 需要加的是差值=v - val (自己想一下)

sum

* 因为空间换来时间, 所以直接返回key2Sum即可
