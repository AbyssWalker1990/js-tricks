const separator = '----------------------------------'

const emptySet = new Set()
console.log(`Empty Set: ${emptySet}\n${separator}`)

const setFromArray = new Set([1, true, 'Hello'])
console.log('From Array:')
setFromArray.forEach(el => console.log(el))
console.log(separator)

setFromArray.add('Added by Method')
console.log('add method:')
setFromArray.forEach(el => console.log(el))
console.log(separator)

console.log(`Size: ${setFromArray.size}`)
console.log(separator)

console.log(setFromArray.has('Hello'))  // true
console.log(setFromArray.has('World'))  // false
console.log(separator)

// Search in set do not need to iterate through all elements, its a single operation

setFromArray.delete(true)
console.log('Delete method:')
setFromArray.forEach(el => console.log(el)) // true deleted
console.log(separator)

setFromArray.clear()
console.log(setFromArray) // Empty
console.log(separator)

const newSet = new Set([1, true, 'Hello'])
// Iteration with for loop
for (let el of newSet) {
  console.log(`New Set Elements ${el}`)
}
console.log(separator)

// Use Cases
// Need to extract unique values from an array
const notUniqueArr = ['Hello', 'Vova', 'Mushroom', 'Manson', 'Vova', 'Hello']
const uniqueArr = [...new Set(notUniqueArr)]
console.log(uniqueArr)  // Only unique values
