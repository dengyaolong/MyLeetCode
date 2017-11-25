const val = { "L": 1,"R": -1,"U": 1,"D" : -1, }
const mp = { "L": 0, "R": 0, "U": 1,"D": 1 }

var judgeCircle = function(moves) {
    if (moves.length % 2 !== 0) {
        return false;
    }
    let res = [0, 0]
    for(let i = 0; i < moves.length; i ++) {
        let m = moves[i]
        if(m in mp) {
            res[mp[m]] += val[m]
        }
    }
    return res[0] === 0 && res[1] === 0
};
