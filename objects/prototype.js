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
