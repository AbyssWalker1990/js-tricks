// array of [key, value] pairs
let map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1']
]);

console.log(map.get('1')); // str1
// --------------------------------//

// Map from object
let obj = {
  name: "John",
  age: 30
};

let map1 = new Map(Object.entries(obj));

console.log(map1.get('name')); // John


// ------------------------------ //

// Object from Array 
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }
console.log(prices.orange); // 2


// Object from map
let map3 = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj1 = Object.fromEntries(map3.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2
