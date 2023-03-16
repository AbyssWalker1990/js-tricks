const arr = [[['value']]]

// Not optimal way
// arr.forEach((array1) => {
//   array1.forEach((array2) => {
//     array2.forEach((el) => {
//       console.log(el)
//     })
//   })
// })

// Better way
const retrieveValue = (element) => {
  if (Array.isArray(element)) {
    return retrieveValue(element[0])
  } else {
    return element
  }
}
console.log(retrieveValue(arr))