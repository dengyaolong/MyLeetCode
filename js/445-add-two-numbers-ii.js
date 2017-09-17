function list2Str(l) {
    let r = '' 
    while(l) {
        r += l.val
        l = l.next
    }
    return r
}

var addTwoNumbers = function(l1, l2) {
    let s1 = list2Str(l1), s2 = list2Str(l2)
    let len1 = s1.length, len2 = s2.length
    let n = Math.max(len1, len2)
    let pre, ans, f = 0
    for(let i = 1; i <= n || f; i++) {
        let num1 = +s1[len1 - i] || 0
        let num2 = +s2[len2 - i] || 0
        var t = num1 + num2 + f
        f = t > 9 ? 1 : 0;
        ans = new ListNode(t % 10)
        ans.next = pre 
        pre = ans
    }
    return ans
}


