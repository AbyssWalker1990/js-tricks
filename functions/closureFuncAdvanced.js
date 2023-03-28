let x = 1

const parentFunc = () => {
  let i = 5
  console.log(x)
  console.log(i)

  const childFunc = () => {
    console.log(x += 4)
    console.log(i += 1)
  }
  return childFunc
}

const closureFunc = parentFunc()
closureFunc() // Will have access to global scope and parentFuncScope
closureFunc() // Incremeting values one more time remembering previos state
closureFunc() // MUTATE our variables!!
console.log(x) // x - mutated
// console.log(i) // Reference error, havent access from global scope