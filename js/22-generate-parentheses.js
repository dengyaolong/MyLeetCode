var generateParenthesis = function(n) {
    let res = []
    generate("", 0, 0)
    function generate(cur, l, r) {
        if(l === n && r === n) {
            res.push(cur)
        } 
        if(l <= n) {
            generate(cur + "(", l + 1, r)
        }
        if(l && r < l) {
            generate(cur + ")", l, r + 1)
        }
    }
    return res
};
