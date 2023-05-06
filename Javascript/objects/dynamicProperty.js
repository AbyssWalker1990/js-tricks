// Here i can dynamically change it
const dynamic = "hobbies"

const User = {
    name: "Vova",
    email: "vova@gmail.com",
    [dynamic]: "sleep"
}

console.log(User)