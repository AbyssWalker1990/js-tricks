// getSwapiPagerator = (endpoint) => async function* () {
//   let nextUrl = `https://swapi.dev./api/${endpoint}`
//   while (nextUrl) {
//     const response = await fetch(nextUrl)
//     const data = await response.json()
//     nextUrl = data.next
//     yield* data.results
//   }
// }

// starWars = {
//   characters: {
//     [Symbol.asyncIterator]: getSwapiPagerator('people')
//   },
//   planets: {
//     [Symbol.asyncIterator]: getSwapiPagerator('planets')
//   },
//   ships: {
//     [Symbol.asyncIterator]: getSwapiPagerator('starships')
//   },
// }

// const results = []
// for await (const page of starWars.characters) {
//   console.log(page.name)
//   results.push(page.name)
//   yield results
// }


getSwapiPagerator = (endpoint) => async function* () {
  let nextUrl = `https://swapi.dev/api/${endpoint}`
  while (nextUrl) {
    const response = await fetch(nextUrl)
    const data = await response.json()
    nextUrl = data.next
    yield* data.results
  }
}

starWars = {
  characters: {
    [Symbol.asyncIterator]: getSwapiPagerator('people')
  },
  planets: {
    [Symbol.asyncIterator]: getSwapiPagerator('planets')
  },
  ships: {
    [Symbol.asyncIterator]: getSwapiPagerator('starships')
  },
}

const results = []
for await (const page of starWars.characters) {
  console.log(page.name)
  results.push(page.name)
}