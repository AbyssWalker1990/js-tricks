const addNums = (num1, num2, callback) => {
  let result = num1 + num2
  if (callback) {
    result = callback(result)
  }
  return result
}

const callB = (num) => {
  return num * 10
}

console.log(addNums(5, 6))