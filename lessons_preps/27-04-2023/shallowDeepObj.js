const a = {}
const b = {
  numbers: [1, 5, 6],
  name: 'Andriy',
  pet: {
    petName: 'Lol',
    petAge: 32,
    petHobbies: ['Run', 'Swim'],
    customSet: new Set([1, 2, 3])
  }
}

Object.assign(a, b)
console.log(a)
b.pet.petHobbies.push('Eat')
console.log(a)


// function mixin (target, ...objects) {
//   for (const object of objects) {
//     for (const key of Object.keys(object)) {
//       if (typeof object[key] === 'object') {
//         target[key] = Array.isArray(object[key]) ? [] : {}
//         mixin(target[key], object[key])
//       } else {
//         Object.assign(target, object)
//       }
//     }
//   }
//   return target
// }

// console.log(b)
// const c = {}
// mixin(c, b)
// console.log(c)