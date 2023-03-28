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