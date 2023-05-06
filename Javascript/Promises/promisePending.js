const myPromise = new Promise((resolve, reject) => {
  const error = false
  if(!error) {
    resolve('Yes, resolve the Promise')
  } else {
    reject('No, rejected the promise')
  }
})

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("myNextPromise resolved!")
  }, 3000)
})

// executes after 3 sec
myNextPromise.then(value => {
  console.log(value)
})

// executes immediatelly
myPromise.then(value => {
  console.log(value)
})