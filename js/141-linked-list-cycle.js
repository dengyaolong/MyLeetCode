var hasCycle = function(head) {
    if(head === null) return false
    let slow = head, fast = head
    do {
        slow = slow.next
        fast = fast.next && fast.next.next
    } while(fast && slow.val !== fast.val)
    return fast !== null 
};
