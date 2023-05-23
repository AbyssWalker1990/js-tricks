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

const depthFirstValues = (root) => {
  if (root === null) return []
  const result = []
  const stack = [root]
  while (stack.length > 0) {
    const currentNode = stack.pop()
    result.push(currentNode.val)

    if (currentNode.right) stack.push(currentNode.right)
    if (currentNode.left) stack.push(currentNode.left)
  }
  return result
}


// console.log(depthFirstValues(a))

const depthFirstValuesRecursive = (root) => {
  if (root === null) return []
  const leftValue = depthFirstValuesRecursive(root.left)
  const rightValue = depthFirstValuesRecursive(root.right)
  return [root.val, ...leftValue, ...rightValue]
}

console.log(`Recursive: ${depthFirstValuesRecursive(a)}`)