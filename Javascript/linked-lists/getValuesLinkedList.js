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

const getValues = (head) => {
  const result = []
  let current = head
  while (current !== null) {
    result.push(current.value)
    current = current.next
  }
  return result
}

console.log(getValues(a))

const getValuesRecursive = (head) => {
  const result = []
  fillValues(head, result)
  return result
}

const fillValues = (head, result) => {
  if (head === null) return
  result.push(head.value)
  fillValues(head.next, result)
}

console.log(getValuesRecursive(a))