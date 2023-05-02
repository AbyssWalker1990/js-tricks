const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'testfiles', 'test.txt'), (err, data) => {
    if (err) throw err
    console.log(data.toString())
    fs.writeFile(path.join(__dirname, 'testfiles', 'reply.txt'), 'Hello World\n', err => {
        if (err) throw err
        console.log('Write complete')
        fs.appendFile(path.join(__dirname, 'testfiles', 'reply.txt'), 'After Hello World', err => {
            if (err) throw err
            console.log('Append complete')
            fs.rename(path.join(__dirname, 'testfiles', 'reply.txt'), path.join(__dirname, 'testfiles', 'renamed.txt'), err => {
                if (err) throw err
                console.log('Rename complete')
            })
        })
    })
})


console.log('End of script')



process.on('uncaughtException', err => {
    console.error(err)
    process.exit(1)
})