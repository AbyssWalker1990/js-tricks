function firstAction (callback, message, anotherCallback) {
  console.log(message)
  setTimeout(callback, 2000)
  anotherCallback()
}

function secondAction (message) {
  console.log(`I am the second ${message}`)
}

function thirdAction () {
  console.log('I am the third action')
}

setTimeout(() => firstAction(() => secondAction('Hello'), 'Hi there', thirdAction), 5000)
