function parseF(s) {
    return isNaN(parseFloat(s)) ? null : parseFloat(s);
  }
console.log(parseF('one'))
console.log(parseF('1'))