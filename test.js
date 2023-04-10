const romanNumerals = new Map()
romanNumerals.set(1, 'I').set(2, 'II').set(3,'III').set(4,'IV')
console.log(romanNumerals)
const arr = [...romanNumerals]
const arr2 = [...romanNumerals]
const arr3 = [...romanNumerals]

function concatArrays (arr) {
  const result = []
  for (item of arr) {
    for (subItem of item) {
      result.push(subItem)
    }
  }
  return result
}
const concated = concatArrays(arr)
const concated1 = concatArrays(arr2)
const concated2 = concatArrays(arr3)
console.log(concated)















