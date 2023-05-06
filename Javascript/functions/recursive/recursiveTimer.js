// For loop implementation
const forTimer = (seconds) => {
  for (let i = seconds; i >= 0; i--) {
    console.log(i)
  }
}

// forTimer(10)

// Recursive implementation

const recursiveTimer = (seconds) => {
  console.log(seconds)
  const updatedSeconds = seconds - 1
  if (updatedSeconds >= 0) {
    recursiveTimer(updatedSeconds)
  }
}

recursiveTimer(13)