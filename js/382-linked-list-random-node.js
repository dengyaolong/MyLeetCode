var Solution = function(head) {
    this.head = head
};

Solution.prototype.getRandom = function() {
    let cur = this.head;
    let res = cur.val;
    let n = 1;
    while(cur = cur.next) {
        res = Math.random() > (1 / ++n) ? res : cur.val
    }
    return res
};
