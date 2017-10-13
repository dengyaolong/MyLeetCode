let dp = [0, 1, 1, 2]
let start = 2, end = 4

function deal(num) {
    while(dp.length < num) {
        for(let j = start; j < end; j++) {
            dp.push(dp[j])
        }
        for(let j = start; j < end; j++) {
            dp.push(dp[j] + 1)
        }
        start = end
        end <<= 1
    }
}

var countBits = function(num) {
    deal(num + 1)
    return dp.slice(0, num + 1)
};
