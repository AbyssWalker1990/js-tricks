function square(x) {
  return x*x
}

// console.log(square.length)

const vadim = {
  name: 'Vadim'
}

function sayHello(greeting='Hello') {
  console.log(`${greeting}, my name is ${this.name}`)
}

sayHello.call(vadim, 'Hi')
sayHello.apply(vadim, ['Greetings'])

console.log(square.call(null, 5))

square.description = 'return sqauere'
console.log(square.description)

function squareMemo (x) { 
  squareMemo.cache = squareMemo.cache || {}
  if (!squareMemo.cache[x]) {
    squareMemo.cache[x] = x*x
  }
  console.log(squareMemo.cache)
  return squareMemo.cache[x]
}

squareMemo(5)
squareMemo(3)
squareMemo(1)
squareMemo(2)
squareMemo(5)
squareMemo(3)

