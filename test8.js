const lodash = require('lodash')

class Human {
  constructor(name) {
    this.name = name
  }
  legs = 2
  head = 1
  hobbies = ['Eat', 'Sleep', 'Poop', [1, 2, 4]]
  walk () {
    console.log('I am walking')
  }
}

const arr = ['Hello', [1, 2], ['Bye', true, {legs: 4}]]
const newArr = JSON.parse(JSON.stringify(arr))
const newArr2 = lodash.cloneDeep(arr)

newArr[2][2].legs = 8

console.log(arr)
console.log(newArr)
console.log(newArr2)

// const tania = new Human('Tania')
// const andriy = lodash.cloneDeep(tania)
// // const vadim = JSON.parse(JSON.stringify(tania))
// andriy.hobbies[3].push(100)


// console.log('Tania: ', tania)
// console.log('andriy: ', andriy)