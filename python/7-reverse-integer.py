class Solution:
  def reverse(self, x):
    if x < 0: x,a = -x,-1
    else: a=1
    res = a * int(str(x)[::-1])
    return 0 if res >= 2**31 or res < -2**31 else res

s = Solution()
print s.reverse(-12345678909);
print s.reverse(1234);
print s.reverse(-1234);
print s.reverse(1563847412), 2**31;
