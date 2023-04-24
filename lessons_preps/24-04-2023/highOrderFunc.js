const { test } = require("node:test")

const testingArr = [5, 10 , 3, 2, 100]

const mappedArrSugar = testingArr.map(el => el * 2 )
const mappedArr = testingArr.map(function (el) {
  return el * 2
})

const mappedArrFunc = testingArr.map(forMap)

function forMap (element) {
  return element * 2
}

function customMap (arr, callback) {
  const result = []
  for (let element of arr) {
    const processedElement = callback(element)
    result.push(processedElement)
  }
  return result
}

const customArr = customMap(testingArr, forMap)


console.log(mappedArrSugar)
console.log(mappedArr)
console.log(mappedArrFunc)
console.log(customArr)
console.log('----------------------------------------------')

// Reduce

const reducedSugar = testingArr.reduce((accumulator, curValue) => accumulator + curValue)
const reducedArr = testingArr.reduce(function (accumulator, curValue) {
  return accumulator + curValue
})

const reducedArrFunc = testingArr.reduce(forReduce)

function forReduce (accumulator, curValue) {
  return accumulator + curValue
}

function customReduce(arr, accumulator=0) {
  for (let element of arr) {
    accumulator += element
  }
  return accumulator
}

const customReduced = customReduce(testingArr)


console.log(reducedSugar)
console.log(reducedArr)
console.log(reducedArrFunc)
console.log(customReduced)
console.log('----------------------------------------------')


// filter
const filteredArrSugar = testingArr.filter(element => element < 50)
const filteredArr = testingArr.filter(function (element) {
  return element < 50
})

function forFilter (element) {
  return element < 50
}

const filteredArrFunc = testingArr.filter(forFilter)

function customFilterLessThan(arr, num) {
  const result = []
  for (let element of arr) {
    if (element < num) result.push(element)
  }
  return result
}

function customFilterBiggerThan(arr, num) {
  const result = []
  for (let element of arr) {
    if (element > num) result.push(element)
  }
  return result
}

const customFilteredLess = customFilterLessThan(testingArr, 50)
const customFilteredBigger = customFilterBiggerThan(testingArr, 50)

console.log(filteredArrSugar)
console.log(filteredArr)
console.log(filteredArrFunc)
console.log(customFilteredLess)
console.log(customFilteredBigger)


