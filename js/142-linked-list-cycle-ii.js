2var detectCycle = function(head) {
    if(head === null) return null
    let slow = head, fast = head
    do {
        slow = slow.next
        fast = fast.next && fast.next.next
    } while(fast && slow != fast)
    if(fast === null) {
        return null
    }
    fast = head
    while(fast != slow) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};
