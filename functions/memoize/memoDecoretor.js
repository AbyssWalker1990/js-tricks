const add3 = (num1, num2, num3) => {
  return num1 + num2 + num3
}

const addMany = (...args) => {
  return args.reduce((acc, cur) => acc + cur)
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

const memoizeAdd3 = memoize(add3)
const memoizeMany = memoize(addMany)

console.log(memoizeAdd3(10, 10, 10))
console.log(memoizeAdd3(10, 10, 10))
console.log(memoizeAdd3(10, 10, 10))

console.log(memoizeAdd3(5, 5, 5))
console.log(memoizeAdd3(5, 5, 5))
console.log('---------------------')
console.log(memoizeMany(10, 10, 10, 5))
console.log(memoizeMany(10, 10, 10, 5))
console.log(memoizeMany(10, 10, 10, 5))
console.log(memoizeMany(10, 10))
console.log(memoizeMany(10, 10))
