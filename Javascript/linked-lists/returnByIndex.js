class Node {
    constructor (val) {
      this.value = val
      this.next = null
    }
  }
  
const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d

const returnByIndex = (head, index) => {
  let current = head
  let iterCount = index
  for (let i = 0; i < iterCount; i++) {
    current = current.next
  }
  return current.value
}

console.log('returnByIndex: ', returnByIndex(a, 0))

const returnByIndexNoFor = (head, index) => {
  let current = head
  let count = 0
  while (current !== null) {
    if (count == index) return current.value
    count++
    current = current.next
  }
  return null
}

console.log('returnByIndexNoFor: ', returnByIndexNoFor(a, 6))

const returnByIndexRecursion = (head, index, count=0) => {
  if (head === null) return null
  if (index == count) return head.value
  return returnByIndexRecursion(head.next, index, count + 1)
}

console.log('returnByIndexRecursion: ', returnByIndexRecursion(a, 1))

const returnByIndexRecursiveBetter = (head, index) => {
  if (head === null) return null
  if (index === 0) return head.value
  index--
  return returnByIndexRecursion(head.next, index)
}

console.log('returnByIndexRecursiveBetter: ', returnByIndexRecursiveBetter(a, 3))