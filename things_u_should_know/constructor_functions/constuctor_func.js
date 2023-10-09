function Person(name) {
    this.name = name
    this.talk = () => {
        return `Hi, my name is ${this.name}`
    }
}

const vova = new Person('Vova')

console.log(vova)
console.log(vova.talk())

const ben = new Person('Ben')

const sam = new Person('Sam')
