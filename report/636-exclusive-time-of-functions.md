# 题目
给定n个函数生成的调用日志,格式为  函数id:start/end:timestamp, 如 

```
0:start:0
0:end:1
```

返回每个函数的运算时间


# 解法
这绝对是一题超级无聊而且繁杂的模拟题....做了一个小时....

大概思路是这样的，当前日志记做cur，上一个日志叫做pre，我们用一个栈来记录start的log，当遇到end时候进行一次pop.

* 当cur.status === start, pre.status === start，则res[pre.id] += cur.ts - pre.ts
* 当cur.status === end, pre.status === start, 则是闭合情况，res[cur.id] += cur.ts - pre.ts + 1
* 当cur.status === end, pre.status === end, 则是res[cur.id] += cur.ts - pre.ts 
* 当cur.status === start, pre.status === end, 则当前未闭合的函数q, res[q.id] += cur.ts - pre.ts
