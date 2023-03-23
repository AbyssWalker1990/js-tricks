function add (num1, num2) {
  console.log(num1 + num2)
  console.log(`Arguments: ${arguments}`)
  console.log(`Last arg: ${arguments[4]}`)
  console.log(`Arg length: ${arguments.length}`)
}

add(5, 7, 10, 4, 1)


// Modern way
function addModern (...numberList) {
  console.log(numberList)
}

addModern(5, 7, 10, 4, 1)