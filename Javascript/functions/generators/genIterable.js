function* abcs () {
  yield 'a'
  yield 'b'
  yield 'c'
}

for (let letter of abcs()) {
  console.log(letter.toUpperCase())
}

// A
// B
// C

// OR

console.log([...abcs()])

2660