function* listener () {
  console.log('Listening...')
  while (true) {
    let msg = yield
    console.log('heard: ', msg)
  }
}

let l = listener()
l.next('are u there?')  // Listening
l.next('how are u?')  // heard: how are u?
l.next('blah blah')   // heard: blah blah