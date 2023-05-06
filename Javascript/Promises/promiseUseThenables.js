const myPromise = new Promise((resolve, reject) => {
  const error = true
  if(!error) {
    resolve('Yes, resolve the Promise')
  } else {
    reject('No, rejected the promise')
  }
})

// just give to us state of Promise
console.log(myPromise)

// using Thenables
myPromise
.then(value => {
  return value + 1
})
.then(newValue => {
  console.log(newValue)
})
.catch(err => {
  console.error(error)
})