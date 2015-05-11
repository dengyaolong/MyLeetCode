/**

 * @param {string} s

 * @return {number}

*/

var lengthOfLongestSubstring = function(s) {
    var res=0, tmp=0,cur=0, head=0,tail=0;
    var hash=[]
    while (tail < s.length) {
        if(typeof hash[s[tail]] == 'number'){
            for(;head<=hash[s[tail]];head++){
                hash[s[head]]=null;
                tmp--;
            }
        }
        ++tmp;
        hash[s[tail]]=tail++;
        if (tmp > res) {
            res = tmp;
        }
    }
    return res;
}
