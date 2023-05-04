const a = {}
const b = {
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

// Object.assign(a, b)
// console.log(a)
// b.pet.petHobbies.push('Eat')
// console.log(a)


function mixin (target, ...objects) {
  for (const object of objects) {
    for (const key of Object.keys(object)) {
      if (typeof object[key] === 'object') {
        target[key] = Array.isArray(object[key]) ? [] : {}
        mixin(target[key], object[key])
      } else {
        Object.assign(target, object)
      }
    }
  }
  return target
}

const c = {}
mixin(c, b, secondObj)
console.log(c)
c.fly()