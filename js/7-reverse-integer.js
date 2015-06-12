var reverse = function(x) {
    var a = x < 0 ? (x=-x, -1) : 1;
    var res = a * (x.toString().split("").reverse().join("") - 0);
    return (res | 0) === res ? res : 0;
};
console.log(reverse(1230));
console.log(reverse(1534236469));
console.log(reverse(0));
console.log(reverse(-60));
console.log(reverse(-2147483648));