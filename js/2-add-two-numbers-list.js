var addTwoNumbers = function(l1, l2) {
  var ans = cur = new ListNode(0), f = 0;
  while (l1 || l2 || f) {
    if (!l1) { l1 = new ListNode(0); }
    if (!l2) { l2 = new ListNode(0); }
    var t = l1.val + l2.val + f;
    cur = cur.next = new ListNode(t%10);
    f = t > 9 ? 1 : 0;
    l1 = l1.next;
    l2 = l2.next;
  }
  return ans.next;
}
