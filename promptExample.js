const prompt = require('prompt-sync')({sigint: true})

const readNumber = () => {
    const input = prompt('Number: ', '')
    if (input === '') return null
    
}
