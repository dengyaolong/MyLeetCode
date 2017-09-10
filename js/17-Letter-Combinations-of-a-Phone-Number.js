var keyMap = [
    [" "], ["1"], ["a","b", "c"], 
    ["d", "e", "f"], ["g", "h", "i"], ["j","k","l"],
    ["m","n","o"], ["p","q", "r", "s"],
    ["t","u", "v"], ["w", "x", "y", "z"]
]

var letterCombinations = function(digits) {
    function comb(l) {
        if(l === 0) return []
        if(l === 1) return  keyMap[+digits[0]]
        var lastComb = comb(l-1)
        var res = []
        for(var i = 0; i < lastComb.length; ++i) {
            var keys = keyMap[+digits[l - 1]]
            for(var j = 0; j < keys.length; ++j) {
                res.push(lastComb[i] + keys[j])
            }
        }
        return res
    }
    return comb(digits.length)
};

// console.log(letterCombinations("23"))
// console.log(letterCombinations("231"))
// console.log(letterCombinations("230"))
// console.log(letterCombinations("2399"))
