function squareMemoClosure (x) {
  const cache = {}
  return  (x) => {
    if (!cache[x]) {
      cache[x] = x * x
    } 
    console.log(cache)
    return cache[x]
  }
}

const square = squareMemoClosure()
// square(2)
// square(3)
// square(4)
// square(1)
// square(3)
// square(6)
// square(3)
// square(7)
// square(2)
// square(1)
// square(4)

function party () {
  console.log('Original party')
  party = function () {
    console.log('Changed once')
    party = function() {
      console.log('Changed twice')
    }
  }
}


for (let i = 0; i < 10; i++) {
  party()
}

const memoize = (fn) => {
  const cache = {}
  return (...args) => {
    if (args.toString() in cache) {
      console.log(cache)
      return cache[args.toString()]
    }
    const result = fn(...args)
    cache[args.toString()] = result
    return result
  }
}

const add3 = (num1, num2, num3) => {
  return num1 + num2 + num3
}

const addMany = (...nums) => {
  return nums.reduce((acc, cur) => acc + cur)
}

const memoAdd3 = memoize(add3)
console.log(memoAdd3(3, 3, 3))
console.log(memoAdd3(4, 3, 1))
console.log(memoAdd3(3, 5, 3))
console.log(memoAdd3(3, 3, 3))

const memoAddMany = memoize(addMany)
console.log(memoAdd3(3, 3, 3, 2))
console.log(memoAdd3(4, 3, 1, 10, 10))
console.log(memoAdd3(3, 5, 3))
console.log(memoAdd3(3, 3, 3))
console.log(memoAdd3(4, 3, 1, 10, 10))
console.log(memoAdd3(3, 5, 3))


