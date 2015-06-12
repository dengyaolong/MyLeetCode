class Solution:
    def convert(self, s, numRows):
        if numRows == 1 : return s 
        ques = [""] * numRows
        for i,c in enumerate(s):
            j = i % (2*numRows-2) ;
            cur = j * (j < numRows) + (2 * numRows - 2 - j) * (j >= numRows) ;
            ques[cur] += c
        return "".join(ques) if numRows > 1 else s
s = Solution()
print s.convert("PAYPALISHIRING", 3)
print s.convert("PAYPALISHIRING", 1) 


