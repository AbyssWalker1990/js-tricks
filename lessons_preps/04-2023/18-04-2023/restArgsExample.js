function restExample (num1, num2, ...args) {
  console.log(`num1: ${num1}`)
  console.log(`num2: ${num2}`)
  for (arg of args) {
    console.log(arg)
  }
}

restExample(2, 7, 'Hello', false, 55)  