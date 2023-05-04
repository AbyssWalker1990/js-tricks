function sayHello (name = 'World') {
  return `Hello ${name}`
}

console.log(sayHello())
console.log(sayHello('Universe'))


function discount (price, amount = 10) {
  return price * (100 - amount) / 100
}

console.log(discount(30))
console.log(discount(100))
console.log(discount(100, 35))
console.log(discount(20, 20))