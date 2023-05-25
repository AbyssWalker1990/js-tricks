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
const e = new Node('E')
const f = new Node('F')

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

const q = new Node('Q')
const w = new Node('W')

q.next = w

const ziplist = (head1, head2) => {
  let current1 = head1.next
  let current2 = head2
  let count = 0
  let tail = head1

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2
      current2 = current2.next
    } else {
      tail.next = current1
      current1 = current1.next
    }
    tail = tail.next
    count++
  }
  if (current1 === null) tail.next = current2
  if (current2 === null) tail.next = current1
}

const zipListRecursively = (head1, head2) => {
  if (head1 === null && head2 === null) return null
  if (head1 === null) return head2
  if (head2 === null) return head1

  const next1 = head1.next
  const next2 = head2.next
  head1.next = head2
  head2.next = zipListRecursively(next1, next2)
  return head1
}

const showlist = (head) => {
  let current = head
  while (current !== null) {
    console.log(current.val)
    current = current.next
  }
}

// ziplist(a, q)
zipListRecursively(a, q)
showlist(a)