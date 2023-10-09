const { isJSDocLinkLike } = require('typescript')

function factoryPerson(name) {
    return {
        talk() {
            return `Hi, my name is ${name}`
        },
    }
}

const me = factoryPerson('John')

console.log(me.talk())
console.log(me.name) // undefined
console.log(me) // cant change the name

const ben = factoryPerson('Ben')
console.log(ben.talk())

const jill = factoryPerson('Jill')
console.log(jill.talk())

function createElement(type, text, color) {
    const el = document.createElement(type)
    el.innerText = text
    el.style.color = color
    document.body.appendChild(el)
    return {
        el,
        setText(text) {
            el.innerText = text
        },
        setColor(color) {
            el.style.color = color
        },
    }
}

const h1 = createElement('h1', 'Hello', 'red')

console.log(h1)

h1.setText('Hello World')
