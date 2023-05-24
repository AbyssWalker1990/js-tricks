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

const reverseList = (head) => {
  let current = head
  let prev = null
  while (current !== null) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}

const showList = (head) => {
  let current = head
  while (current !== null) {
    console.log(current.value)
    current = current.next
  }
}

reverseList(a)
console.log(showList(d))

const reverseListRecursive = (head, prev=null) => {
  if (head === null) return prev
  const next = head.next
  head.next = prev
  reverseListRecursive(next, head)
}