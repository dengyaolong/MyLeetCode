var addTwoNumbers = function(l1, l2) {
  var t = l1.val + l2.val;
  var ans = cur = new ListNode(t%10);
  while (!!(l1 = l1.next) | !! (l2 = l2.next) | !!(f = t > 9 ? 1 : 0)) {
    if (!l1) { l1 = new ListNode(0); }
    if (!l2) { l2 = new ListNode(0); }
    t = l1.val + l2.val + f;
    cur = cur.next = new ListNode(t%10);
  }
  return ans;
}
