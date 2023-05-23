class Node {
    constructor(val) {
      this.val = val
      this.left = null
      this.right = null
    }
  }
  
  const a = new Node(5)
  const b = new Node(11)
  const c = new Node(3)
  const d = new Node(4)
  const e = new Node(15)
  const f = new Node(12)
  
  a.left = b
  a.right = c
  b.left = d
  b.right = e
  c.right = f

const findMinDepthFirst = (root) => {
  if (root === null) return 0

  const stack = [ root ]
  let minValue = root.val

  while (stack.length > 0) {
    const current = stack.pop()
    if (minValue > current.val) {
      minValue = current.val
    }

    if (current.left) stack.push(current.left)
    if (current.right) stack.push(current.right)
  }
  return minValue
}

console.log('findMinDepthFirst: ',findMinDepthFirst(a))

const findMinBreadthFirst = (root) => {
  if (root === null) return 0

  const queue = [ root ]
  let minValue = root.val

  while (queue.length > 0) {
    const current = queue.shift()
    if (minValue > current.val) {
      minValue = current.val
    }
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }
  return minValue
}

console.log('findMinBreadthFirst: ', findMinBreadthFirst(a))

const findMinRecursive = (root) => {
  if (root === null) return Infinity
  const leftMin = findMinRecursive(root.left)
  const rightMin = findMinRecursive(root.right)
  return Math.min(root.val, leftMin, rightMin)
}

console.log('findMinRecursive: ', findMinRecursive(a))

