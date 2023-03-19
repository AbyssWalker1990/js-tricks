const user = {
    name: "Vova",
    age: 32,
    skills: [
        "Programmong",
        "Cooking",
        "Reading"
    ]
}

const personCopy = JSON.parse(JSON.stringify(user))