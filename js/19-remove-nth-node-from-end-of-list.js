var removeNthFromEnd = function(head, n) {
    let root = new ListNode()
    root.next = head
    let fast = head, slow = head,  pre = root
    while(n --) {
        fast = fast.next
    }
    while(fast) {
        pre = slow
        fast = fast.next
        slow = slow.next
    }
    pre.next = slow.next
    return root.next
};
