const myUser = {
  userList: []
}

const myCoolFunction = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/users')
  const jsonUserData = await response.json()
  return jsonUserData
}


const anotherFunc = async () => {
  const data = await myCoolFunction()
  myUser.userList = data
  console.log(myUser.userList)
}

anotherFunc()




