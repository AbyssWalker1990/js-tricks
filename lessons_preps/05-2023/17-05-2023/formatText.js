const path = require('path')
const fsPromises = require('fs').promises

const countTotalSumOfSymbols = async (dirPath) => {
  const fileNames = await getFileNames(dirPath)
  let sumArr = 0
  for (let fileName of fileNames) {
    let result = await countSumOfSymbols(fileName)
    sumArr += result
  }
  return sumArr
}

const countTotalNotAsync = (dirPath) => {
  const filenames = getFileNames(dirPath)
  filenames.then(value => {
    let sumArr = []
    for (let fileName of value) {
      let result = countSumOfSymbols(fileName)
      sumArr.push(result)
    }
    return sumArr
  }).then(sumArr => {
    let resultArr = Promise.all(sumArr)
    console.log(resultArr)
    return resultArr
  }).then(resultArr => {
    console.log(resultArr)
    const totalSum = resultArr.reduce((acc, cur) => acc + cur)
    console.log(totalSum)
  })
}

const getFileNames = async function (dirPath) {
  const fileNameArr = await fsPromises.readdir(dirPath)
  return fileNameArr
}

const countSumOfSymbols = async (inputFile) => {
  const filePath = path.join(__dirname, 'data', inputFile)
  const data = await fsPromises.readFile(filePath, 'utf-8')
  const formattedData = data.replaceAll(' ', '')
  const symbolsArr = formattedData.split('')
  const onlyNums = symbolsArr.filter(symbol => Number.isInteger(Number(symbol)))
  let sum = 0
  onlyNums.forEach(num => {
    sum += Number(num)
  })
  return sum
}

// let result = 0
// const data = countTotalSumOfSymbols(path.join(__dirname, 'data'))
//   .then(value => {
//     result = value
//   })

// console.log(result)


countTotalNotAsync(path.join(__dirname, 'data'))

