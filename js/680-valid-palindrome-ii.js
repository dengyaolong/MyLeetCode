var validPalindrome = function(s) {
    let flag = true
    let iterators = [[0, s.length - 1]]
    while(iterators.length) {
        let [start, end] = iterators.pop() 
        while(start < end) {
            if(s[start] != s[end]) {
                if(flag) {
                    flag = flase
                    iterators.push([start + 1, end])
                    iterators.push([start, end - 1])
                }
                break
            }
            ++start, --end
        }
        if(start >= end) return true
    }
    return false
};
