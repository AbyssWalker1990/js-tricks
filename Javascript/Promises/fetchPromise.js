const users = fetch('http://jsonplaceholder.typicode.com/users')

// pending
console.log(users)

fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })
  .then(data => {
    data.forEach(user => {
      console.log(user.name)
    })
  })

