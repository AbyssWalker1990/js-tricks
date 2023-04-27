const lodash = require('lodash')

class Human {
  constructor(name) {
    this.name = name
  }
  legs = 2
  head = 1
  hobbies = ['Poop', 'Eat', 'Sleep', [1, 2, 4]]
  walk () {
    console.log('I am walking')
  }
}

const andriy = new Human('Andriy')

const vova = JSON.parse(JSON.stringify(andriy))
const vadim = lodash.cloneDeep(vova)

// console.log(vova)
// console.log(andriy)
// console.log(vadim)

const AncientHuman = {
  arms: 2,
  legs: 2,
  roar () {
    console.log('Aaaarghh!')
  }
}

const ancientAndriy = Object.create(AncientHuman)

console.log(ancientAndriy.arms)
console.log(ancientAndriy.legs)
console.log(ancientAndriy.roar())

