var minMoves2 = function(nums) {
  let curSum = 0
  let averages = [0]
  for(let i = 0; i < nums.length; i ++) {
    curSum += nums[i]
    averages.push(Math.round(curSum / (i + 1)))
  }

  function findI(c, l = 1, r = nums.length) {
    if(l >= r) return 0
    while(r - l > 1) {
      let m = (l + r)>>1
      if(nums[m] > c) {
        r = m
      } else if(nums[m] < c) {
        l = m
      } else {
        console.log(l, r, 'sb')
        return m
      }
    }
    return l
  }
  console.log(nums)
  for(let i = 1; i <= nums.length; i++ ) {
    let k = findI(averages[i])
    console.log(averages[i],k)
  }
  console.log(curSum)
  console.log(averages)


}
var minMoves = function(numsl) {
  numsl.sort((l,r) => l - r)
  if(numsl.length === 0) return 0
  function diff(average) {
    return numsl.reduce((res, cur) => res += Math.abs(cur - average), 0)
  }

  let l = 0
  let lastAver = 0;
  // for(let i = 0; i < numsl.length; i++) {
    let nums = numsl.slice(0, 1)
    var sum = nums.reduce((sum, cur) => sum + cur, 0)
    lastAver = Math.round(sum / nums.length)
    let r = diff(lastAver)
  let res = l + r

  // }
  for(let i = 1; i < numsl.length; i ++) {
    let nums = numsl.slice(0, i + 1)
    var sum = nums.reduce((sum, cur) => sum + cur, 0)
    let average = Math.round(sum / nums.length)
    let dist = average - lastAver
    l += i * dist
    r -= (numsl.length - i) * dist
    console.log('i:', i, ' av:', average, ' lv:', lastAver, ' l:',l, ' r:', r, 'cal: ', r + l, 'dist', dist)
    lastAver = average
    res = Math.min(l + r, res)
  }
  return res
};
// console.log(minMoves2([1,2,3]))
// console.log(minMoves2([1,2,4, 8]))
console.log(minMoves2([1,2,4,8,1000]))
// console.log(minMoves2([1,2,4,8,1000]))
// console.log(minMoves2([1,2,4,8,1000, 10001]))
let nums = []
for(let i = 0; i < 10000; i++) {
  nums.push(i)
}
// console.log(minMoves2(nums))
//
// 1,2,4,8,
//
//
// 1,2,4,8,
//
//   15 / 4 = 3.75
//
//   5
//
// 4, 3, 1, 3
//
// 3, 2, 0, 4
