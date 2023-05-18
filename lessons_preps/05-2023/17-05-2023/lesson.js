function square (x) {
    return x * x
}

const vadim = {
    name: 'Vadim'
}

const vova = {
    name: 'Vova'
}

function sayHello (greeting='Hello') {
    console.log(`${greeting}, my name is ${this.name}`)
}


function memoSquare (x) {
    memoSquare.cache = memoSquare.cache || {}
    console.log(memoSquare.cache)
    if (!memoSquare.cache[x]) {
        memoSquare.cache[x] = x * x
        return memoSquare.cache[x]
    } else {
        return memoSquare.cache[x]
    }
}

console.log(memoSquare(4))
console.log(memoSquare(5))
console.log(memoSquare(4))
console.log(memoSquare(6))
console.log(memoSquare(77))
console.log(memoSquare(2))
console.log(memoSquare(77))
console.log(memoSquare(100))
console.log(memoSquare(6))