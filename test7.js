class CustomArray {
  constructor(...args) {
    this.arr = [...args]
  }

  showArray () {
    console.log('Array: ', this.arr)
  }

  customMap (callback) {
    const result = []
    for (let element of this.arr) {
      const processedElement = callback(element)
      result.push(processedElement)
    }
    return new CustomArray(...result)
  }

  customReduce (accumulator=0) {
    for (let element of this.arr) {
      accumulator += element
    }
    return accumulator
  }

  filterLessThan (num) {
    const result = []
    for (let element of this.arr) {
      if (element < num) result.push(element)
    }
    return new CustomArray(...result)
  }
}

const myArr = new CustomArray(3, 6, 10, 100)
myArr.showArray()
const customMapArr = myArr.customMap(element => element * 2)
const customReduceArr = myArr.customReduce()
const customFilteredArr = myArr.filterLessThan(10)

const chaining = myArr.customMap(element => element * 2).customReduce()

console.log('customMapArr: ',customMapArr)
console.log('customReduceArr: ', customReduceArr)
console.log('customFilteredArr: ', customFilteredArr)
console.log('chaining: ', chaining)
