/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var addTwoNumbers = function(l1, l2) {
  var reverseStr = function(str) { return str.split('').reverse().join('');}
  var tranNum = function(l) {
    var ans = "";
    do{ans += l.val.toString();} while (l=l.next);
    return parseInt(reverseStr(ans));
  }
  var tranNode = function(num) {
      var ansList = cur = new ListNode(parseInt(num[0]));
      for (var i = 1; i < num.length; ++i) {
        cur = cur.next = new ListNode(parseInt(num[i]));
      }
      return ansList;
  }
  var ans = (tranNum(l1)+tranNum(l2));
  return tranNode(reverseStr(ans.toString()));
};
