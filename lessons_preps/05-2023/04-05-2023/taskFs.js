const fsPromises = require('fs').promises
const path = require('path')

class TextFormatter {
  constructor(path) {
    this.path = path
    this.init()
  }

  init = async () => {
    const data = await this.readFile(this.path)
    const cutted = this.cutSentence(data.toString())
    const textWithStatistics = this.addStatistics(cutted)
    this.writeFile(textWithStatistics)
  }

  readFile = async () => {
    const fileData = await fsPromises.readFile(this.path)
    return fileData
  }

  cutSentence = (data) => {
    console.log(typeof data)
    const cutted = data.replaceAll('\n', '').split('.')
    const trimmedSentences = cutted.map(sentence => sentence.trim())
    return trimmedSentences
  }

  addStatistics = (sentences) => {
    const result = []
    sentences.forEach((sentence) => {
      const wordCount = sentence.split(' ').length
      const formattedSentence = `${sentence} // Words: ${wordCount}, Symbols: ${sentence.length}\n`
      result.push(formattedSentence)
    })
    return result.join(' ').trim()
  }

  writeFile = async (formattedText) => {
    fsPromises.writeFile(path.join(__dirname, 'result.txt'), formattedText)
  }
}

const textFormatter = new TextFormatter(path.join(__dirname, 'ninja.txt'))
