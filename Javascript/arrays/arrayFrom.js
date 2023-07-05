console.log('Array-like: \n');

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)
console.log(Array.isArray(arr));
console.log(arr.length);
console.log('------------------------------\n');

// ---------------------------------------------------//
console.log('Iterable: \n');
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator] () {
    this.current = this.from;
    return this;
  },

  next () {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

let arr1 = Array.from(range);
console.log(arr1); // 1,2,3,4,5 (array toString conversion works)


let arrWithFunc = Array.from(range, num => num * num);
console.log('arrWithFunc: ', arrWithFunc); // 1,4,9,16,25

let str = '𝒳😂';
// splits str into array of characters
let arrayFromStr = Array.from(str);
console.log('arrayFromStr[0]: ', arrayFromStr[0]); // 𝒳
console.log('arrayFromStr[1]: ', arrayFromStr[1]); // 😂
console.log('arrayFromStr.length:', arrayFromStr.length); // 2
