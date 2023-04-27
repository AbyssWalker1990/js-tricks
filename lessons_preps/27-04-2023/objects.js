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

console.log(vova)
console.log(andriy)

