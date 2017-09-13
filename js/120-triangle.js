function minimumTotal(triangle) {
    if(triangle.length === 0) return 0
    for(var i = triangle.length - 1; i >= 1; i--) {
        var lt = triangle[i]
        var ct = triangle[i - 1]
        for(var j = ct.length - 1; j >= 0; j--) {
            ct[j] += Math.min(lt[j], lt[j + 1])
        }
    }
    return triangle[0][0]
};
