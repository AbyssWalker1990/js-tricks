const playDice = (...playerNames) => {
  
  const playersResults = new Map()
  for (let player of playerNames) {
    let result = throwDice()
    playersResults.set(player, result)
  }

  declareResults(playersResults)

  const biggerResult = findBiggerResult(firstPlayerResult, secondPlayerResult)
  const champion = detectChampion(biggerResult,firstPlayerResult, secondPlayerResult, firstPlayerName, secondPlayerName)
  return champion
}

function throwDice () {
  let result = Math.floor((Math.random()*13))
  if (result < 2) {
    result = 2
  }
  return result
}

function declareResults (results) {
  for (let [playerName, result] of results.entries()) {
    console.log(`${playerName} threw ${result}`)
  }
}

function findBiggerResult(result1, result2) {
  return Math.max(result1, result2)
}

function detectChampion(biggerResult, result1, result2, firstPlayerName, secondPlayerName) {
  if (result1 === result2) return `Draw`
  if (biggerResult === result1) return `${firstPlayerName} won with ${result1}`
  return `${secondPlayerName} won with ${result2}`  
}

console.log(playDice('Tania', 'Andriy', 'Vadim', 'Vova', 'Arina'))










