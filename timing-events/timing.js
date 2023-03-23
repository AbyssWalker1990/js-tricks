// With function defined insite setInterval
// setTimeout(function greet (name1) {
//   console.log(`Hi ${name1}`)
// }, 3000, 'Vova')

// ---------------------------------

// function greet (name1) {
//   console.log(`Hi ${name1}`)
// }

// let timer = setTimeout(greet, 3000, 'Vova')
// clearTimeout(timer) // Function will not work because we cancel this timer

//----------------------------------

function greet (name1) {
  console.log(`Hi ${name1}`)
}

let timer = setInterval(greet, 3000, 'Vova')
// clearTimeout(timer) // Function will not work because we cancel this timer