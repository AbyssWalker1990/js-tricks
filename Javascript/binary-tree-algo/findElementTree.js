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

const findBreadthFirst = (el, root) => {
  if (root === null) return false

  const queue = [root]
  const result = []

  while (queue.length > 0) {
    const current = queue.shift()
    if (current.val === el) return true
    result.push(current.val)
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
  return false
}

const findDepthFirstRecursive = (el, root) => {
  if (root === null) return false
  if (root.val === el) return true
  return findDepthFirstRecursive(el, root.left) || findDepthFirstRecursive(el, root.right)

}

// console.log(findBreadthFirst('f', a))
console.log(findDepthFirstRecursive('k', a))