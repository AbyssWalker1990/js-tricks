class Node {
    constructor (val) {
      this.value = val
      this.next = null
    }
  }
  
  const a = new Node(5)
  const b = new Node(2)
  const c = new Node(6)
  const d = new Node(1)
  
  a.next = b
  b.next = c
  c.next = d

const sumList = (head) => {
  let current = head
  let sum = 0
  while (current !== null) {
    sum += current.value
    current = current.next
  }
  return sum
}

console.log(sumList(a))

const sumListRecursive = (head) => {
  if (head === null) return 0
  return head.value += sumListRecursive(head.next)
}

console.log(sumListRecursive(a))