
cardDeck = ({
  suits: ['♠', '♣', '♡', '♢'],
  court: ['J', 'Q', 'K', 'A'],
  [Symbol.iterator]: function* () {
    for (let suit of this.suits) {
      for (let i = 2; i <= 10; i++) yield suit + i
      for (let c of this.court) yield suit + c
    }
  }
})

console.log(...cardDeck)

const myObject = {
  data: [1, 2, 3, 4],
  *[Symbol.iterator] () {
    for (const value of this.data) {
      yield value
    }
  }
}

console.log(...myObject)