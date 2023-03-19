let startAt = performance.now()

// Code here

for (let i = 0; i < 25000; i++) {
    console.log(i)
}

let endAt = performance.now()

const perfTime = endAt - startAt
console.log(`It takes ${perfTime / 1000} seconds`)
