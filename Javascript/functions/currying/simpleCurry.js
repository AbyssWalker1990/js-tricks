// Curruing takes a function that receives more than one parameter
// and breaks it into a series of unary (1 parameter) functions

// Ugly decision because of nesting
const buildSandwich = (ingridient1) => {
  return (ingridient2) => {
    return (ingridient3) => {
      return `${ingridient1}, ${ingridient2}, ${ingridient3}`
    }
  }
}

const sandwich = buildSandwich('Bacon')('Lettuce')('Tomato')
console.log(sandwich)

// Shorter solution
const buildSammy = ingred1 => ingred2 => ingred3 => {
  return `${ingred1}, ${ingred2}, ${ingred3}`
}

const sammy = buildSammy('Bacon')('Lettuce')('Tomato')
console.log(sammy)