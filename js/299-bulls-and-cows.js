var getHint = function(secret, guess) {
    let A = 0, B = 0;
    let buffA = new Map()
    let buffB = new Map()
    function add(mp, k) {
        let cnt = 0
        if(mp.has(k)) {
            cnt = mp.get(k)
        } 
        mp.set(k, cnt +  1)
    }
    for(let i = secret.length - 1; i >= 0; --i) {
        if(secret[i] == guess[i]) {
            A ++
        } else {
            add(buffA, secret[i])
            add(buffB, guess[i])
        }
    }
    for(let [k, v] of buffB) {
        if(buffA.has(k)) {
            B += Math.min(buffA.get(k), v)
        }
    }
    return `${A}A${B}B`
};
