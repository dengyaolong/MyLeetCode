function legal(c) {
    return (c <= "z" && c >= "a") || (c <= "9" && c >= "0")
}
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let start = 0, end = s.length - 1;
    while(start < end) {
        while(!legal(s[start]) && start < end) start++
                while(!legal(s[end]) && end > start) end--
                    if(s[start] != s[end]) return false
            start++, end --
    }
    return true
};
