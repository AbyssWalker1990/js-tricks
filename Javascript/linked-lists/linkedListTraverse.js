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

const linkListTraverse = (head) => {
  let current = head
  while (current !== null) {
    console.log(current.value)
    current = current.next
  }
}

linkListTraverse(a)

const linkListTraverseRecursive = (head) => {
  if (head === null) return
  console.log(head.value)
  linkListTraverseRecursive(head.next)
}

linkListTraverseRecursive(a)
