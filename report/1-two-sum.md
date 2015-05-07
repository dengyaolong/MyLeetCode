#必然超时的O(N^2)解
抱着必然TLE的心态去写了一个O(N^2)的，两个For。
```
for i = 0 : n-1
  for j = i + 1 : n
    if nums[i] + nums[j] == target
      return [i, j];
```
#O(NlogN)的解法
很容易就可以想到用二分来解
步骤:
  1. 生成数对，[数字，原始下标]
  2. 基于数对的数字大小进行排序
  3. 从小到大，二分查找另一半

#O(N)的解法
用hash解
步骤:
  1. 遍历数组，插入hash[nums[i]] = i
  2. 遍历数组，查询hash[target-nums[i]],有则返回[i,hash[target-nums[i]]]
不过具体也要看hash时候插入是否为O(1)

