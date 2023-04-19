const playDice = (round, ...playerNames) => {
  const playersResults = new Map()
  for (let player of playerNames) {
    let result = throwDice()
    playersResults.set(player, result)
  }
  declareResults(playersResults)
  const biggestResult = findBiggerResult(playersResults)
  const champions = detectChampions(biggestResult, playersResults)
  if (champions.length > 1) {
    return playDice(round + 1, ...champions)
  } else {
    return declareChampions(champions, biggestResult, round)
  } 
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

function findBiggerResult(results) {
  const uniqueResults = []
  results.forEach((value, key) => {
    if (!uniqueResults.includes(value)) {
      uniqueResults.push(value)
    }
  }) 
  console.log(`Unique: ${uniqueResults}`)
  const biggestResult = Math.max(...uniqueResults)
  console.log(`Biggest Result: ${biggestResult}\n---------------------------`)
  return biggestResult
}

function detectChampions(biggestResult, playerResults) {
  const champions = []
  playerResults.forEach((value, key) => {
    if (value === biggestResult) {
      champions.push(key)
    }
  })
  console.log(champions)
  return champions
}

function declareChampions(championsList, biggestResult, round) {
  let greetings = 'Our Champions Are:'
  if (championsList.length === 1) greetings = 'Our Champion Is:'
  return `${greetings} ${championsList.join(', ')} with result: ${biggestResult} in round: ${round}`
}

console.log(playDice(1, 'Tania', 'Andriy', 'Vadim', 'Vova', 'Arina', 'Zlata', 'Nina', 'Sonic', 'Mushroom', 'Umbrella', 'Rain'))










