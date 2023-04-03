const multiply = (x, y) => x * y

const curryMultiply = x => y => x * y

console.log(multiply(2, 6))
console.log(curryMultiply(2)(6))

// Partially applied func
const timesTen = curryMultiply(10)
console.log(timesTen(8))  // return 10 * 8

// Another example
const updateElemtext = id => content => document.querySelector(`#${id}`).textContent = content
const updateHeaderText = updateElemtext('header')
updateHeaderText('Hello Vova!')