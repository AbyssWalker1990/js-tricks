
function discount (price, amount = 10) {
  return price * (100 - amount) / 100
}

console.log(discount(250))