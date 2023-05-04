const mammal = {
  breath: true,
  skin: 'fur'
}

const human = {
  legs: 2,
  mightyBrain: true
}

// console.log(human.legs)
// console.log(human.mightyBrain)

// human.__proto__ = mammal

// console.log(human.breath)
// console.log(human.__proto__)

//------------------------------------------
//New way

Object.setPrototypeOf(human, mammal)
console.log(Object.getPrototypeOf(human))
console.log(human.__proto__)
console.log(Object.getPrototypeOf(human) === human.__proto__)
console.log(human.breath)
console.log('----------------------- Extending the prototype chain -----------------------')
// Extending the prototype chain => general to specific to more specific
const factoryWorker = {
  friend: "Mihalych",
  drink: "Baltika 9",
  __proto__: human
}

console.log(factoryWorker.breath)

// Object with getter and setter methods
const whale = {
  swim: true
}
Object.setPrototypeOf(whale, mammal)
console.log(whale.skin)
whale.skin = 'bald'
console.log(human.skin)
// -------------------------
const car = {
  doors: 2,
  seats: 'vinyl',
  get seatMaterial () {
    return this.seats
  },
  set seatMaterial (material) {
    this.seats = material
  }
}

const luxuryCar = {}
Object.setPrototypeOf(luxuryCar, car)
luxuryCar.seatMaterial = 'leather'
console.log(luxuryCar.seatMaterial)

console.log('----------------------- Walking up the chain -----------------------')
console.log('luxuryCar.valueOf():', luxuryCar.valueOf())
console.log('----------------------- Getting the keys of an object -----------------------')
console.log(Object.keys(luxuryCar))
Object.keys(luxuryCar).forEach(key => {
  console.log(key)
})

// loop for in. INCLUDES INHERITED PROPERTIES
console.log('----------------------- for in loop -----------------------')

for (let key in luxuryCar) {
  console.log(key)
}

// Object Constructors
console.log('----------------------- Object Constructors -----------------------') 
function Animal(species) {
  this.species = species
  this.eats = true
}

Animal.prototype.walks = function () {
  return `A ${this.species} is walking`
}

const Bear = new Animal('bear')

console.log(Bear.species)
console.log(Bear.walks())

//The prototype property is where inheritable props and methods are
console.log('----------------------- Bear.__proto__ -----------------------') 

console.log(Bear.__proto__)
console.log('----------------------- Bear.__proto__ === Animal.prototype -----------------------') 

console.log(Bear.__proto__ === Animal.prototype)
console.log('Animal.prototype: ', Animal.prototype)
console.log('Bear: ',Bear)

// ES6 classes example of inheritance
console.log('----------------------- ES6 classes example of inheritance -----------------------') 

class Vehicle {
  constructor() {
    this.wheeels = 4,
    this.motorized = true
  }

  ready() {
    return 'Ready to go'
  }
}

class Motorcycle extends Vehicle {
  constructor () {
    super()
    this.wheels = 2
  }

  wheelie () {
    return 'On one wheel now'
  }
}

const myBike = new Motorcycle() 
console.log('myBike: ', myBike)
console.log('myBike.wheels: ', myBike.wheels)
console.log('myBike.ready(): ', myBike.ready())
console.log('myBike.wheelie(): ', myBike.wheelie())

const myTruck = new Vehicle()
console.log('myTruck: ', myTruck)


class ChessFigures {
  constructor(color) {
    this.suits = ['♠', '♣', '♡', '♢']
    this.court = ['J', 'Q', 'K', 'A']
  }

  [Symbol.iterator] = function* () {
    for (let suit of this.suits) {
      for (let i = 2; i <= 10; i++) yield suit + i
      for (let c of this.court) yield suit + c
    }
  }
}
const deckArr = new ChessFigures('black')
console.log([...deckArr])