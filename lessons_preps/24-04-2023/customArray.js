class CustomArray {
  constructor(...args) {
    this.arr = [...args]
  }

  showArray () {
    console.log(this.arr)
  }

  customMap (callback) {
    const result = []
    for (let element of this.arr) {
      const processedElement = callback(element)
      result.push(processedElement)
    }
    return result
  }

  customReduce(accumulator=0) {
    for (let element of this.arr) {
      accumulator += element
    }
    return accumulator
  }

  customFilterLessThan(num) {
    const result = []
    for (let element of this.arr) {
      if (element < num) result.push(element)
    }
    return new CustomArray(...result)
  }
  
  customFilterBiggerThan(num) {
    const result = []
    for (let element of this.arr) {
      if (element > num) result.push(element)
    }
    return new CustomArray(...result)
  }
}

const myArr = new CustomArray(4, 7, 1, 100)

const mapped = myArr.customMap(el => el * 2)
const reduced = myArr.customReduce()
const lessThan = myArr.customFilterLessThan(50).customReduce()
const biggerThan = myArr.customFilterBiggerThan(50)
console.log(mapped)
console.log(reduced)
console.log(lessThan)
console.log(biggerThan)

