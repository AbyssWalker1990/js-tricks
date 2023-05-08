const path = require('path')
const fsPromises = require('fs').promises

const formatText = async (inputFile) => {
    const filePathInput = path.join(__dirname, 'data', inputFile)
    const formattedSentences = await readFile(filePathInput)
    const formattedData = addStatistics(formattedSentences)
    await writeFile(formattedData)
}

const readFile = async (filePath) => {
    const data = await fsPromises.readFile(filePath, 'utf-8')
    const sentences = data.split('.')
    const formattedSentences = sentences.map(sentence => {
        return sentence.replaceAll('\r\n', '').trim()
    })
    return formattedSentences
}

const addStatistics = (sentences) => {
    const result = []
    sentences.forEach(sentence => {
        const wordsCount = sentence.split(' ').length
        const symbolsCount = sentence.length
        result.push(`${sentence} // Words: ${wordsCount} Symbols: ${symbolsCount}\n`)
    })
    const formattedData = result.join('')
    return formattedData
}

const writeFile = async (data) => {
    const filePathOutput = path.join(__dirname, 'data', 'result.txt')
    await fsPromises.writeFile(filePathOutput, data)
}

formatText('ninja.txt')

