// Allows calling small functions in a specific order

const addCustomer = fn => (...args) => {
  console.log('saving customer info ...')
  return fn(...args)
}

const processOrder = fn => (...args) => {
  console.log(`processing order #${args[0]}`)
  return fn(...args)
}

let completeOrder = (...args) => {
  console.log(`Order #${[...args].toString()} completed`)
}

completeOrder = (processOrder(completeOrder))
console.log(completeOrder)
completeOrder = (addCustomer(completeOrder))
completeOrder('1000')

// Explaining
// function addCustomer(...args) {
//   return function processOrder(...args) {
//     return function completeOrder(...args) {
//       //end
//     }
//   }
// }