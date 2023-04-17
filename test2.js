const friends = ['Andriy', 'Vadim', 'Tania', 'Vova']
const greetings = ['Hello', 'Hi','Greetings!', 'Fuck u!']

function createGreeting(friendsArr, greetingsArr) {
  const randomFriend = returnRandomElement(friendsArr)
  const randomGreeting = returnRandomElement(greetingsArr)
  return addStrings(randomGreeting, randomFriend)
}

function returnRandomElement (arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

function addStrings (greeting, friend) {
  return `${greeting} ${friend}`
} 

console.log(createGreeting(friends, greetings))




