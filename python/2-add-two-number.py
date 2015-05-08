class Solution:
    # @param {ListNode} l1
    # @param {ListNode} l2
    # @return {ListNode}
    def addTwoNumbers(self, l1, l2):
        cur = ans = ListNode(0)
        f = 0
        while l1 or l2 or f :
            if not l1 : l1 = ListNode(0)
            if not l2 : l2 = ListNode(0)
            t = l1.val + l2.val + f
            f = t/10;
            cur.next = cur = ListNode(t % 10)
            l1, l2 = l1.next,l2.next
        return ans.next
