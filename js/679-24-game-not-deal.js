function Fraction(numerator, denominator) {
    this.numerator = numerator
    this.denominator = denominator
}

Fraction.prototype.add = function(frac) {
    let numerator = this.numerator * frac.denominator  +  frac.numerator * this.denominator
    let denominator = this.denominator * frac.denominator 
    return new Fraction(numerator, denominator)
}

Fraction.prototype.devide = function(frac) {
    let numerator = this.numerator * frac.denominator
    let denominator = this.denominator * frac.numerator 
    return new Fraction(numerator, denominator)
}

Fraction.prototype.multiple = function(frac) {
    let numerator = this.numerator * frac.numerator
    let denominator = this.denominator * frac.denominator 
    return new Fraction(numerator, denominator)
}

Fraction.prototype.minus = function(frac) {
    let numerator = this.numerator * frac.denominator - frac.numerator * this.denominator
    let denominator = this.denominator * frac.denominator 
    return new Fraction(numerator, denominator)
}

Fraction.prototype.equal = function(frac) {
    return this.numerator * frac.denominator === frac.numerator * this.denominator && this.denominator != 0
}
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator)
}

const operates = ['devide', 'multiple', 'minus', 'add']
const RES = new Fraction(24, 1)

let computedCached = new Map()
var judge = function(nums) {
    let computeFracs = [nums.map(num => new Fraction(num, 1))]
    while(computeFracs.length > 0) {
        let fracs = computeFracs.shift()
        if(fracs.length === 1) {
            if(fracs[0].equal(RES)) {
                return true
            }
        } else {
            for(let i = 0; i < fracs.length - 1; i++) {
                for(let j = 0; j < 4; j++) {
                    let nextFracs = []
                    for(let k = 0; k < fracs.length; ++k) {
                        if(k === i) continue
                        else if (k === i + 1) nextFracs.push(fracs[i][operates[j]](fracs[i + 1]))
                        else nextFracs.push(fracs[k])
                    }
                    computeFracs.push(nextFracs)
                }
            }
        }
    }
    return false
};

var judgePoint24 = function(nums) {
    let perms = [{toPerm: nums, permed: []}]
    let res = []
    let LEN = nums.length
    while(perms.length > 0) {
        let {toPerm, permed} = perms.shift()
        if(permed.length === LEN) {
            if(judge(permed)) {
                return true
            }
        } else {
            for(let i = 0; i < toPerm.length ; i++) {
                perms.push({
                    toPerm: toPerm.slice(0, i).concat(toPerm.slice(i + 1)),
                    permed: permed.concat(toPerm[i])
                })
            }
        }
    }
    return false
};

