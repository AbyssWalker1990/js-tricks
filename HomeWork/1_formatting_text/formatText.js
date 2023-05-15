const path = require('path')
const fsPromises = require('fs').promises

const countTotalSumOfSymbols = async (dirPath) => {
  const fileNames = await getFileNames(dirPath)
  let sumArr = 0
  for ( let fileName of fileNames) {
    let result = await countSumOfSymbols(fileName)
    sumArr += result
  }
  console.log(sumArr)
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
  onlyNums.forEach( num => {
    sum += Number(num)
  })
  return sum 
}


countTotalSumOfSymbols(path.join(__dirname, 'data'))