const fs = require('fs')
const path = require('path') // after showing async

// fs.readFile('./testfiles/test.txt', (err, data) => {
//   if (err) throw err
//   console.log(data)  // shows Buffer
// })

// Without utf
// fs.readFile('./testfiles/test.txt', (err, data) => {
//   if (err) throw err
//   console.log(data.toString())
// })


// fs.readFile('./testfiles/test.txt', 'utf-8', (err, data) => {
//   if (err) throw err
//   console.log(data.toString())
// })

// console.log('Hello')

fs.readFile(path.join(__dirname, 'testfiles', 'test.txt'), 'utf-8', (err, data) => {
  if (err) throw err
  console.log(data.toString()) // shows Buffer
})

fs.writeFile(path.join(__dirname, 'testfiles', 'reply.txt'), 'Nice To Meet U', (err) => {
  if (err) throw err
  console.log('Write complete') // shows Buffer

  fs.appendFile(path.join(__dirname, 'testfiles', 'appendTest.txt'), 'Testing Text', (err) => {
    if (err) throw err
    console.log('Append complete') // shows Buffer
    fs.rename(path.join(__dirname, 'testfiles', 'appendTest.txt'),
      path.join(__dirname, 'testfiles', 'renameTest.txt'),
      (err) => {
        if (err) throw err
        console.log('Rename complete') // shows Buffer
      })
  })
})




// exit in uncaught error
process.on('uncaughtException', err => {
  console.error(`There was uncaught exception ${err}`)
  process.exit(1)
})