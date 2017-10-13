function ComplexNumber(a, i) {
    if(typeof a === 'string') {
        let [first, second] = a.split("+")
        this.a = parseInt(first)
        this.i = parseInt(second)
    } else {
        this.a = a
        this.i = i
    }
}

ComplexNumber.prototype.mul = function(c) {
    let a  = this.a * c.a - this.i * c.i
    let i = this.a * c.i + c.a * this.i
    return new ComplexNumber(a, i)
}

ComplexNumber.prototype.toString = function() {
    return `${this.a}+${this.i}i`
}

var complexNumberMultiply = function(a, b) {
    let aC =  new ComplexNumber(a)
    let bC =  new ComplexNumber(b)
    return aC.mul(bC).toString()
} 
