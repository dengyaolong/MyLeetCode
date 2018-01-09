var mergeTwoLists = function(l1, l2) {
    let res = new ListNode(1)
    let cur = res
    while(l1 || l2) {
        if(!l1) {
            cur = cur.next = l2
            l2 = l2.next
        } else if(!l2) {
            cur = cur.next = l1
            l1 = l1.next
        } else {
            if(l1.val > l2.val) {
                cur = cur.next = l2
                l2 = l2.next
            } else  {
                cur = cur.next = l1
                l1 = l1.next
            } 
            
        }
        
    }
    return res.next
};
