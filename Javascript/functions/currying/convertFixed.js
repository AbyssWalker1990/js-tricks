// requires a func with a fixed number of parameters
const curry = (fn) => {
  return curried = (...args) => {
    if (fn.length !== args.length) {
      return curried.bind(null, ...args) // bind creates new func
    }
    return fn(...args)
  }
}

const total = (x, y, z) => x + y + z

const curriedTotal = curry(total)
console.log(curriedTotal(10)(20)(30))