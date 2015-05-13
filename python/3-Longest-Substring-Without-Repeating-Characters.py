class Solution:
    def lengthOfLongestSubstring(self, s):
        head, tail, res = [0] *3 
        hash = [0] * 200
        while tail < len(s):
            v = ord(s[tail])
            while hash[v] and head < hash[v]:
                hash[ord(s[head])] = 0
                head += 1
            tail += 1
            hash[v] = tail
            if tail-head > res : res = tail - head 
        return res 

                

a = Solution()
print a.lengthOfLongestSubstring('')
print a.lengthOfLongestSubstring('aaa')
print a.lengthOfLongestSubstring('babac')
