const testingArr = [1, 4, 7, 10, 100]

const mappedArrSugar = testingArr.map(element => element * 2)

const mappedArr = testingArr.map(function (element) {
  return element * 2
})

const mappedArrFunc = testingArr.map(forMap)

function forMap (element) {
  return element * 2
}

function forMap2 (element) {
  return element * 100
}

function customMap (arr, callback) {
  const result = []
  for (let element of arr) {
    const processedElement = callback(element)
    result.push(processedElement)
  }
  return result
}

const mappedCustom = customMap(testingArr, forMap)
const mappedCustom2 = customMap(testingArr, forMap2)

console.log('mappedArrSugar: ', mappedArrSugar)
console.log('mappedArr: ', mappedArr)
console.log('mappedArrFunc: ', mappedArrFunc)
console.log('mappedCustom: ', mappedCustom)
console.log('mappedCustom2: ', mappedCustom2)
console.log('---------------------------------')

const reducedArrSugar = testingArr.reduce((accumulator, curValue) => accumulator + curValue)

const reducedArr = testingArr.reduce(function (accumulator, curValue) {
  return accumulator + curValue
})

function forReduce(accumulator, curValue) {
  return accumulator + curValue
}

const reduceArrFunc = testingArr.reduce(forReduce)

function customReduce (arr, accumulator=0) {
  for (let element of arr) {
    accumulator += element
  }
  return accumulator
}

const reducedCustom = customReduce(testingArr, 100)

console.log('reducedArrSugar: ', reducedArrSugar)
console.log('reducedArr: ', reducedArr)
console.log('reduceArrFunc: ', reduceArrFunc)
console.log('reducedCustom: ', reducedCustom)
console.log('----------------------------')

const filteredArrSugar = testingArr.filter(element => element < 50)
const filteredArr = testingArr.filter(function (element) {
  return element < 50
})

function forFilter (element) {
  return element < 50
}

const filteredArrFunc = testingArr.filter(forFilter)

function filterLessThan (arr, num) {
  const result = []
  for (let element of arr) {
    if (element < num) result.push(element)
  }
  return result
}

function filterBiggerThan (arr, num) {
  const result = []
  for (let element of arr) {
    if (element > num) result.push(element)
  }
  return result
}

const lessThan = filterLessThan(testingArr, 50)
const biggerThan = filterBiggerThan(testingArr, 50)

console.log('filteredArrSugar: ', filteredArrSugar)
console.log('filteredArr: ', filteredArr)
console.log('filteredArrFunc: ', filteredArrFunc)
console.log('lessThan: ', lessThan)
console.log('biggerThan: ', biggerThan)
