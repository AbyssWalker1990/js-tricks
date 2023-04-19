function add(num1, num2, callback) {
  let sum = num1 + num2
  if (callback) {
    sum = callback(sum)
  }
  return sum
}

function callB(num) {
  return num *10
}

console.log(add(1, 4))