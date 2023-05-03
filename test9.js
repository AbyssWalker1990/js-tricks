const a = {}

const firstObj = {
  numbers: [1, 5, 6],
  name: 'Andriy',
  pet: {
    petName: 'Lol',
    petAge: 32,
    petHobbies: ['Run', 'Swim', [1, 2, 4]],
  },
  fly: function () {
    console.log('FLYING')
  }
}

const secondObj = {
  roles: ['Healer', 'Tank', 'Support'],
  hp: 1000
}

function superAssign(target, ...objects) {
  for (const object of objects) {
    for (const key of Object.keys(object)) {
      if (typeof object[key] === 'object') {
        target[key] = Array.isArray(object[key]) ? [] : {}
        superAssign(target[key], object[key])
      } else {
        Object.assign(target, object)
      }
    }
  }
  return target
}

const newObj = superAssign(a, firstObj, secondObj)
console.log(a)




