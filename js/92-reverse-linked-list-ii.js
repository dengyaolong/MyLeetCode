var reverseBetween = function(head, m, n) {
    let res = new ListNode(0)
    res.next = head
    head = res
    m ++, n++;

    for(let i = 1; i < m - 1; i++) {
        head = head.next
    }
    let startBreakNode = head

    let q = []
    for(let i = m ; i <= n; i++) {
        head = head.next
        q.push(head)
    }

    let endBreakNode = head && head.next || null

    while(q.length) {
        startBreakNode = startBreakNode.next = q.pop()
    }
    startBreakNode.next = endBreakNode
    return res.next
};
