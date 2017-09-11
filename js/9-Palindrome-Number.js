var isPalindrome = function(x) {
  if(x < 0) return false
  var len = Math.floor(Math.log10(x))
  while(len >= 1) {
    var pow = Math.pow(10, len)
    var header = Math.floor(x / pow)
    var tail = x % 10
    x -= header * pow
    x = Math.floor(x / 10)
    if(header !== tail) return false
		len -= 2
  }
  return true
};

