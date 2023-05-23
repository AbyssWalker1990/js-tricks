class Node {
  constructor(val, num) {
    this.val = val
    this.num = num
    this.left = null
    this.right = null
  }
}

const a = new Node('a', 3)
const b = new Node('b', 11)
const c = new Node('c', 4)
const d = new Node('d', 4)
const e = new Node('e', 2)
const f = new Node('f', 1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

const depthFirstSum = (root) => {
  if (root === null) return 0
  let sum = 0

  const stack = [root]

  while (stack.length > 0) {
    const current = stack.pop()
    sum += current.num

    if (current.left) stack.push(current.left)
    if (current.right) stack.push(current.right)
  }
  return sum
}

console.log('depthFirstSum: ', depthFirstSum(a))

const breadthFirstSum = (root) => {
  if (root === null) return 0
  let sum = 0

  const queue = [root]

  while (queue.length > 0) {
    const current = queue.shift()
    sum += current.num

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
  return sum
}

console.log('breadthFirstSum: ', breadthFirstSum(a))

const recursiveTreeSum = (root) => {
  if (root === null) return 0
  return root.num + recursiveTreeSum(root.left) + recursiveTreeSum(root.right)
}

console.log('recursiveTreeSum: ', recursiveTreeSum(a))