const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

// const fileProcessor = async () => {
//     try {
//         const data = await fsPromises.readFile(
//             path.join(__dirname, 'testfiles', 'test.txt'),
//             'utf8'
//         )
//         console.log(data)
//         await fsPromises.writeFile(
//             path.join(__dirname, 'testfiles', 'reply.txt'),
//             'Hello World!\n'
//         )

//         await fsPromises.appendFile(
//             path.join(__dirname, 'testfiles', 'reply.txt'),
//             'Hi Universe'
//         )

//         await fsPromises.rename(
//             path.join(__dirname, 'testfiles', 'reply.txt'),
//             path.join(__dirname, 'testfiles', 'renamed.txt')
//         )
//         const renamedData = await fsPromises.readFile(
//             path.join(__dirname, 'testfiles', 'renamed.txt'),
//             'utf8'
//         )
//         console.log(renamedData)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fileProcessor()





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

// git config --global user.name "John Doe"  
// git config --global user.email johndoe@example.com 