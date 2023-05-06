function* genFunction () {
  yield 'Hello World!'
}

let genObject = genFunction()
// Generator {}
console.log(genObject.next())
// { value: 'Hello World!', done: false }
console.log(genObject.next())
// { value: undefined, done: false }