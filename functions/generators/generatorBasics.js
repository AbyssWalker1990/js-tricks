function* simpleGenerator () {
  yield 1
  yield 2
  yield 3
}

const genObj = simpleGenerator()
console.log(genObj.next())  //{ value: 1, done: false }
console.log(genObj.next())  //{ value: 2, done: false }
console.log(genObj.next())  //{ value: 3, done: false }

function* generateId () {
  let id = 1

  while (true) {
    yield id
    id++
  }
}

const idGenerator = generateId()
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
console.log(idGenerator.next())
