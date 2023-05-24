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

const findElement = (head, target) => {
  if (head === null) return false
  if (head.value === target) return true
  let current = head
  while (current !== null) {
    if (current.value === target) return true
    current = current.next
  }
  return false
}

console.log(findElement(a, 'C'))

const findElementRecursive = (head, target) => {
  if (head === null) return false
  if (head.value === target) return true
  return findElementRecursive(head.next, target)
}

console.log(findElementRecursive(a, 'M'))