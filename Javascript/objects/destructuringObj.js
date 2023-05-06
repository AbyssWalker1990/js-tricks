const user = {
  myName: 'Vova',
  age: 32,
  hobbies: ['Cycling', 'Programming']
}

const { myName, age, hobbies: [firstHobby, secondHobby] } = user



console.log(myName)
console.log(age)
console.log(firstHobby)
console.log(secondHobby)

const andriy = [3, 5, 7]
andriy.push(10)
