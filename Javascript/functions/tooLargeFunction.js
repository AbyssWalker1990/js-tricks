const addMultiplySubstract = (a, b, c) => {
  // Addition
  const addition = a + b + c

  // Multiplication
  const multiple = a * b * c

  // Substraction
  const substraction = a - b - c

  return `${addition} ${multiple} ${substraction}`
}

// Better way is to avoid large function and separate logic 
const add = (a, b, c) => a + b + c
const mult = (a, b, c) => a * b * c
const sub = (a, b, c) => a - b - c 