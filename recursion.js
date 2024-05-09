console.log('Project Recursion')

function fibs(n) { // The value of the term that needs to be calculated
    let x = 0 // First term
    let y = 1 // Second term
    let a = [x, y]
    let z // Sum of the previous two terms
    for (let i = 2; i < n; i++) {
        z = x + y
        x = y
        y = z
        a.push(y)   
    }
    console.log(`Fibonacci series of ${n} is ${a} by using for loop.`)
    return a
}

fibs(8)



function fibsRec(n) {
    if (n === 0 || n === 1) {
        return n
    } else {
        return fibsRec(n - 1) + fibsRec(n - 2)
    }
}
n = 8
let a = []
for (let i = 0; i < n; i++) {
    a.push(fibsRec(i))
}

console.log(`Fibonacci series of ${n} is ${a} by using recursion.`)
