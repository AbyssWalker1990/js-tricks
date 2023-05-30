const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
}

const hasPathDepth = (graphEx, src, dst) => {
  const stack = [src]
  while (stack.length > 0) {
    const current = stack.pop()
    if (current === dst) return true
    for (let neighbor of graphEx[current]) {
      stack.push(neighbor)
    }
  }
}

console.log('hasPathDepth:', hasPathDepth(graph, 'f', 'h'))

const hasPathRecursive = (graphEx, src, dst) => {
  if (src === dst) return true

  for (let neighbor of graphEx[src]) {
    if (hasPathRecursive(graphEx, neighbor, dst) === true) {
      return true
    }
  }
  return false
}

// console.log(hasPathRecursive(graph, 'f', 'k'))

const hasPathBreadth = (graphEx, src, dst) => {
  const queue = [src]

  while (queue.length > 0) {
    const current = queue.shift()
    if (current === dst) return true
    for (let neighbor of graphEx[current]) {
      queue.push(neighbor)
    }
  }
  return false
}

// console.log(hasPathBreadth(graph, 'f', 'k'))
