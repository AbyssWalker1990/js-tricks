const str = 'The quick red fox jumped over the lazy dog\'s back.';

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done) {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}
