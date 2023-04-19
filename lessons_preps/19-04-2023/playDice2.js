const playDice = (...playerNames) => {
  
    const playersResults = new Map()
    for (let player of playerNames) {
      let result = throwDice()
      playersResults.set(player, result)
    }
  
    declareResults(playersResults)
  
    const biggerResult = findBiggerResult(playersResults)
    const champions = detectChampions(biggerResult, playersResults)
    if (champions.length > 1) {
      return playDice(...champions)
    } else {
      return declareChampions(biggerResult, champions)
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
    results.forEach((value) => {
      if (!uniqueResults.includes(value)) {
        uniqueResults.push(value)
      }
    })
    console.log('Unique: ', uniqueResults)

    const biggestResult = Math.max(...uniqueResults)
    console.log(`Biggest:  ${biggestResult}\n------------------------------`)
    return biggestResult
  }
  
  function detectChampions(biggerResult, playerResults) {
    const championsList = []
    playerResults.forEach((value, key) => {
      if (value === biggerResult) {
        championsList.push(key)
      }
    })
    return championsList
  }

  function declareChampions(biggerResult, championsList) {
    let greetings = 'Our Winner Is:'
    if (championsList.length > 1) greetings = 'Our Winners Are:' 
    return `${greetings} ${championsList.join(', ')} with result: ${biggerResult}`
  }
  
 console.log(playDice('Tania', 'Andriy', 'Vadim', 'Vova', 'Arina'))
  
  