const myPromise = new Promise((resolve, reject) => {
    const error = true
    if(!error) {
      resolve('Yes, resolve the Promise')
    } else {
      reject('No, rejected the promise')
    }
  })
  