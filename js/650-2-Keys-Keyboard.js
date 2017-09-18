let n2Step = new Map()

function set(n, step) {
    if(n2Step.has(n)){
        let cStep = n2Step.get(n);
        n2Step.set(n, Math.min(step, cStep))
    } else {
        n2Step.set(n, step)
    }
}

function copyAndPaste(step, n, copy) {
    if(n > 1000) return
    copy = n
    n += copy
    step += 2
    set(step, n)
    copyAndPaste(step, n, copy)
    paste(step, n, copy)
}

function paste(step, n, copy) {
    if(n > 1000) return
    n += copy
    step ++
    set(n, step)
    copyAndPaste(step, n, copy)
    paste(step, n, copy)
}

n2Step.set(1, 0)
copyAndPaste(0, 1, 0)
var minSteps = function(n) {
    return n2Step.get(n)
};
