const playKosti = (firstPlayerName, secondPlayerName) => {
  let firstPlayerResult = Math.floor((Math.random()*13))
  if (firstPlayerResult < 2) {
    firstPlayerResult = 2
  } 
  let secondPlayerResult = Math.floor((Math.random()*13))
  if (secondPlayerResult < 2) {
    secondPlayerResult = 2
  } 
  console.log(`${firstPlayerName} throw ${firstPlayerResult}`)
  console.log(`${secondPlayerName} throw ${secondPlayerResult}`)
  const arr = [firstPlayerResult, secondPlayerResult]

  const biggerNumber = Math.max(...arr)

  if (firstPlayerResult === secondPlayerResult) {
    return `Draw`
  } else if (biggerNumber === firstPlayerResult) {
    return `${firstPlayerName} won with ${firstPlayerResult}`
  } else {
    return `${secondPlayerName} won with ${secondPlayerResult}`
  }
}

console.log(playKosti('Tania', 'Andriy'))









