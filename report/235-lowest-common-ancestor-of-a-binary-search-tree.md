#题意
求bst任意两个节点p, q的公共祖先节点

#解法
从根节点开始追溯．令p < q，当p < node &&  q > node．则node为公共祖先节点
