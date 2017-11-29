 
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let res = new ListNode(0)
    res.next = head
    head = res
    m ++, n++;

    for(let i = 1; i < m - 1; i++) {
        console.log(i)
        head = head.next
    }
    let breakNode = head
    console.log(breakNode, 'break')
    let q = []
    for(let i = m ; i < n; i++) {
        head = head.next
        q.push(head)
    }
    console.log(q, breakNode)
    while(q.length) {
        breakNode.next 
        let cur = q.shift()
        console.log(cur, 'kkk')
        breakNode.next = cur
        breakNode = cur
    }
    return res.next
};
 
function ListNode(val) {
     this.val = val;
     this.next = null;
}

var l1 = new ListNode(1)
var l2 = new ListNode(2)
var l3 = new ListNode(3)
var l4 = new ListNode(4)
var l5 = new ListNode(5)
l1.next = l2
l2.next = l3
l3.next = l4
l4.next = l5

console.log(JSON.stringify(reverseBetween(l1, 2, 4)))
