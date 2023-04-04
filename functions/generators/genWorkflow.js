function* loggerator () {
  console.log('running...')
  yield 'paused'
  console.log('running again ...')
  return 'stopped'
}

let logger = loggerator()
logger.next() // running
// { value: 'paused', done: false }
logger.next() // running again
// { value: 'stopped', done: true }
