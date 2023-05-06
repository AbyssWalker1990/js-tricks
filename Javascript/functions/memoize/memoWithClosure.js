const memoMultiplyBy10 = () => {
  cache = {}

  return (num) => {
    if (num in cache) {
      return cache[num]
    }
    const result = num * 10
    cache[num] = result
    return result
  }
}
const multiplyBy10 = memoMultiplyBy10()
console.log(multiplyBy10(10))
console.log(multiplyBy10(11))
console.log(multiplyBy10(10))
console.log(multiplyBy10(3))
console.log(multiplyBy10(4))
console.log(multiplyBy10(5))
console.log(multiplyBy10(6))