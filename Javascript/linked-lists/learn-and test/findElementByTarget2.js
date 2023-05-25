class Node {
  constructor(val) {
    this.val = val
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

const findElBytarget = (head, target) => {
  let current = head
  while (current !== null) {
    if (current.val === target) return true
    current = current.next
  }
  return false
}

console.log(findElBytarget(a, 'K'))

const findBytargetRecursive = (head, target) => {
  if (head === null) return false
  if (head.val === target) return true
  return findBytargetRecursive(head.next, target)
}

console.log(findBytargetRecursive(a, 'B'))