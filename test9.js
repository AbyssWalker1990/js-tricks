const a = {}

const b = {
  number: [ 1, 43, 7],
  name: 'Andriy',
  pet: {
    petName: 'Kostia',
    petAge: 29,
    petHobbies: ['Run', 'Play']
  }
}

Object.assign(a, b)
console.log(a)
