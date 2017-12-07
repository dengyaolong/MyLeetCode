var calculate = function(s) {
  s = s.replace(/\s/g, '')
  let nums = []
  let start = 0
  s += '+'
  for(let i = 0; i < s.length; i++) {
    if(['-', '+'].indexOf(s[i]) != -1) {
      let cur = parseInt(s.slice(start, i))
      start = i
      nums.push(cur)
    } else if(['*', '/'].indexOf(s[i]) != -1) {
      let cur = parseInt(s.slice(start, i))
      let head = i;
      let tail = i;
      let last = s[i]
      do {
        head = tail = tail + 1
        while(s[tail] >= '0' && s[tail] <= '9') {
          tail ++
        }
        let next = parseInt(s.slice(head, tail))
        if(s[head - 1] === '*') {
          cur *= next
        } else {
          cur /= next
          cur = cur > 0 ? Math.floor(cur) : Math.ceil(cur)
        }
      } while(['*', '/'].indexOf(s[tail]) != -1)

      start = i = tail
      nums.push(cur)
    } else {

    }
  }
  return nums.reduce((pre, cur) => pre + cur, 0)
};

