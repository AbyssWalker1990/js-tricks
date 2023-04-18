const playDice = (...playerNames) => {
  const resultsMap = new Map()
  for (player of playerNames) {
    let playerResult = throwDice()
    resultsMap.set(player, playerResult)
  }
  console.log(resultsMap)
  declareResults(firstPlayerName, secondPlayerName, firstPlayerResult, secondPlayerResult)
  const biggerResult = findBiggerResult(firstPlayerResult, secondPlayerResult)
  const champion = detectChampion(biggerResult, firstPlayerResult, secondPlayerResult, firstPlayerName, secondPlayerName)
  return champion
}