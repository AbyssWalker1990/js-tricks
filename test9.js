const a = {}

const firstObj = {
  numbers: [1, 5, 6],
  name: 'Andriy',
  pet: {
    petName: 'Lol',
    petAge: 32,
    petHobbies: ['Run', 'Swim'],
  },
  fly: function () {
    console.log('FLYING')
  }
}

const secondObj = {
  roles: ['Healer', 'Tank', 'Support'],
  hp: 1000
}

function deepClone (target, ...objects) {
  for (object of objects) {
    for (key of Object.entries(object)) {
      if (typeof object[key] === 'object') {
        target[key] = Array.isArray(object[key]) ? [] : {}
        deepClone(target[key], object[key])
      } else {
        Object.assign(target, object)
      }
    }
  }
  return target
}

deepClone(a, firstObj,secondObj)
console.log(a)