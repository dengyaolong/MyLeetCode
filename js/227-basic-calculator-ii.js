var calculate = function(s) {
  s = s.replace(' ', '')
  let opr = []
  let nums = []
  let start = 0
  let cal = []
  for(let i = 0; i < s.length; i++) {
    if(['-', '+'].indexOf(s[i]) != -1) {
      let cur = parseInt(s.slice(start, i))
      start = i + 1
      nums.push(cur)
    } else if(['*', '/'].indexOf(s[i]) != -1) {
      let cur = parseInt(s.slice(start, i))
      let nextNum = i + 1
      let last
      do {
        while(s[nextNum] >= '0' && s[nextNum] <= '9') {
          nextNum ++
        }
        let next = parseInt(s.slice(i + 1, nextNum))
        console.log(next, cur)
        if(s[nextNum] === '*') {
          cur *= next
        } else {
          cur = Math.floor(cur / next)
        }
      } while(['*', '/'].indexOf(s[nextNum]) != -1)

      start = nextNum + 1
      i = nextNum
      nums.push(cur)
    } else {

    }
  }
  console.log(nums)
};

console.log(calculate("3+2*2 "))
