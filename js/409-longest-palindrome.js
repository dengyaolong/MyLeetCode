var longestPalindrome = function(s) {
    let mp = {}
    let count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        let si = s[i]
        if(mp[si]) {
            count ++;
            mp[si] = 0
        } else {
            mp[si] = 1
        }
    }
    return Math.min(s.length, count * 2 + 1)
};
