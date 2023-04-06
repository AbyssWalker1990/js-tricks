const myObject = {
  data: [1, 2, 3, 4],
  *[Symbol.iterator] () {
    for (const value of this.data) {
      yield value
    }
  }
}

console.log(...myObject)