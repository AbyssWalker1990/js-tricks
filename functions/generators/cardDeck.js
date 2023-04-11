
cardDeck = {
  suits: ['♠', '♣', '♡', '♢'],
  court: ['J', 'Q', 'K', 'A'],
  [Symbol.iterator]: function* () {
    for (let suit of this.suits) {
      for (let i = 2; i <= 10; i++) yield suit + i
      for (let c of this.court) yield suit + c
    }
  }
}

console.log(...cardDeck)





class ChessFigures {
  constructor(color) {
    this.color = color
    this.chess = 'chess'
    this.king = 'king'
    this.queen = 'queen'
    this.tower = 'tower'
    this.horse = 'horse'
    this.officer = 'officer'
  }

  *[Symbol.iterator] () {
    for (let i = 0; i < 10; i++) yield this.chess + ' ' + this.color
    for (let i = 0; i < 2; i++) {
      yield this.tower + ' ' + this.color
      yield this.horse + ' ' + this.color
      yield this.officer + ' ' + this.color
    }
    yield this.king + ' ' + this.color
    yield this.queen + ' ' + this.color
  }
}

const deckArr = new ChessFigures('black')
console.log([...deckArr])