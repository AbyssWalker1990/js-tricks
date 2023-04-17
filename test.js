const playKosti = (firstPlayerName, secondPlayerName) => {
  let firstPlayerResult = throwBones()
  let secondPlayerResult = throwBones()
  declareResults(firstPlayerName, secondPlayerName, firstPlayerResult, secondPlayerResult)
  const biggerResult = findBiggerResult(firstPlayerResult, secondPlayerResult)
  const champion = detectChampion(biggerResult,firstPlayerResult, secondPlayerResult, firstPlayerName, secondPlayerName)
  return champion
}

function throwBones () {
  let result = Math.floor((Math.random()*13))
  if (result < 2) {
    result = 2
  }
  return result
}

function declareResults (playerName1, playerName2, result1, result2) {
  console.log(`${playerName1} throw ${result1}`)
  console.log(`${playerName2} throw ${result2}`)
}

function findBiggerResult(result1, result2) {
  return Math.max(result1, result2)
}

function detectChampion(biggerResult, result1, result2, firstPlayerName, secondPlayerName) {
  if (result1 === result2) return `Draw`
  if (biggerResult === result1) return `${firstPlayerName} won with ${result1}`
  return `${secondPlayerName} won with ${result2}`  
}

console.log(playKosti('Tania', 'Andriy'))










