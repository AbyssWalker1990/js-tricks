const Score = (() => {
  let count = 0
  return {
    current: () => { return count },
    increment: () => { count++ },
    reset: () => { count = 0 }
  }
})()

Score.increment()
Score.increment()
Score.increment()
console.log(Score.current())  // 3
Score.reset()
console.log(Score.current()) // 0
