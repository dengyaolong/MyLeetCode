# 题意
90度旋转矩阵

# 解法
这道题一看就很简单，很多人可能会直接用一个新的矩阵存储，再赋值回去...

但是我们希望不用这么复杂的空间复杂度..

找规律。可以发现，矩阵90度旋转，是基于一层来运作的...

比如下面这个矩阵，1旋转就是交换外层的四个1. 内层2的旋转也如此

```
01000
00201
02020
10200
00010
```

所以做法便是：从外层到内层遍历，对于每层，遍历一条边，每条边，进行四点交换