class Solution:
  def reverse(self, x):
    if x < 0: x,a = -x,-1
    else: a=1
    res = a * int(str(x)[::-1])
    return 0 if res >= 2**31 or res < -2**31 else res