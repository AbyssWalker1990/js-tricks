const fsPromises = require('fs').promises

class TextFormatter {
  constructor(path) {
    this.path = path
    this.init()
  }

  init = async () => {
    const data = await this.readFile(this.path)
    const cutted = this.cutSentence(data.toString())
    // const formattedText = addStatistics(cutted)
    // console.log(formattedText)
  }

  readFile = async () => {
    const fileData = await fsPromises.readFile(this.path)
    return fileData
  }

  cutSentence = (data) => {
    console.log(typeof data)
    const cutted = data.replace('\n', '').split('.')
    console.log(cutted)
    return cutted
  }

  addStatistics = (sentences) => {
    const result = []
    sentences.forEach((sentence) => {
      const wordCount = sentence.split(' ').length
      const formattedSentence = `${sentence} // Words: ${wordCount}, Symbols: ${sentence.length}\n`
      result.push(formattedSentence)
    })
    return result.join(' ')
  }
}

const textFormatter = new TextFormatter('./ninja.txt')
