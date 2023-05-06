function* infinityAndBeyond () {
  let i = 1
  while (true) {
    yield i++
  }
}

function* take (n, iterable) {
  for (let item of iterable) {
    if (n <= 0) return
    n--
    yield item
  }
}

const taken = [...take(5, infinityAndBeyond())] // [1, 2, 3, 4, 5]
console.log(taken)

function* map (iterable, mapFn) {
  for (let item of iterable) {
    yield mapFn(item)
  }
}

const squares = [...take(9, map(infinityAndBeyond(), (x) => x * x))]
console.log(squares)

