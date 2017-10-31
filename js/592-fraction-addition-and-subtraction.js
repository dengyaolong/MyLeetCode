function parse(fracStr) {
    let [n, d] = fracStr.split('/')
    return [+n, +d]
}

function getGcd(l, r) {
    if (l % r === 0) {
        return r
    }
    return getGcd(r, l % r)
}

function add(lhs, rhs) {
    let [rn, rd] = parse(rhs), [ln, ld] = parse(lhs);
    let n = rn * ld + ln * rd,
        d = ld * rd;
    let gcd = getGcd(n, d)
    n /= gcd
    d /= gcd
    if (n * d < 0) {
        n = -Math.abs(n)
    } else {
        n = Math.abs(n)
    }
    d = Math.abs(d)
    return [n, d].join('/')

}
var fractionAddition = function(expression) {
  if(expression[0] != '-') {
    expression = '+' + expression
  }
    let fracs = expression.match(/[+-]\d+\/\d+/g)
    return fracs.reduce((now, t) => {
        return add(now, t)
    }, "0/1")

};

// console.log(fractionAddition("-1/2+1/2+1/3"))
// console.log(fractionAddition("-1/2+1/2"))
// console.log(fractionAddition("-1/3+1/8"))
// console.log(fractionAddition("1/3-1/8"))
// console.log(fractionAddition("5/3+1/3"))
