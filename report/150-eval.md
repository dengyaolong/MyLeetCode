#模拟水题
这就是一道最简单的计算机模拟嘛。知道用栈就好了。

1. 如果当前字符串是数字，那就入栈
2. 如果当前字符串是操作符，那就pop两个数字，进行运算
3. 输出栈顶

```
stack = []
for i in tokens
  if i is Number
    stack.push(i)
  else
    op2, op1 = stack.pop(), stack.pop()
    stack.push(op1 operator[i] op2)
return stack.top()
```
