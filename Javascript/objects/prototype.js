const person = {
  alive: true
}

const musician = {
  plays: true
}

// musician.__proto__ = person // Gives possibility to access alive prop
// console.log(musician.plays)
// console.log(musician.alive)
// console.log(musician.__proto__) // Shows prototype that now is person


// New Way with getprototypeOf and setPrototypeOf
Object.setPrototypeOf(musician, person)
console.log(Object.getPrototypeOf(musician))
console.log(musician.__proto__)
console.log(Object.getPrototypeOf(musician) === musician.__proto__)
console.log(musician.plays)
console.log(musician.alive)
console.log('----------------------- Extending the prototype chain -----------------------')
// Extending the prototype chain => general to specific to more specific
const guitarist = {
  strings: 6,
  __proto__: musician
}
console.log(guitarist.alive)
console.log(guitarist.plays)
console.log(guitarist.strings)

// Object with getter and setter methods
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
console.log('luxuryCar: ', luxuryCar)
console.log('luxuryCar.doors: ', luxuryCar.doors)
console.log('car: ', car)

//Walking up the chain
console.log('----------------------- Walking up the chain -----------------------')
console.log('luxuryCar.valueOf():', luxuryCar.valueOf())
// Getting the keys of an object
console.log('----------------------- Getting the keys of an object -----------------------')
console.log(Object.keys(luxuryCar))
// Loop with forEech
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