class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

const depthFirst = (root) => {
  const stack = [root]
  while (stack.length > 0) {
    const current = stack.pop()
    console.log(current.val)

    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)

  }
}

// depthFirst(a)

const depthFirstRecursive = (root) => {
  const result = []
  if (root === null) return []
  const right = depthFirstRecursive(root.right)
  const left = depthFirstRecursive(root.left)
  return [root.val, ...right, ...left]
}

console.log(depthFirstRecursive(a))