const outer = () => {
  let outerVar = 'outer'

  const inner = () => {
    console.log(`From inner ${outerVar}`)
  }
  return inner
}

const closureUse = outer()

closureUse()