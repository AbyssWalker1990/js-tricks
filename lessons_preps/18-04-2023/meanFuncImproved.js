const mean = (...args) => {
  let sum = 0
  for (let arg of args) {
    sum += arg
  }
  return sum / args.length
}

console.log(mean(4, 8, 33, 88, 34, 1))