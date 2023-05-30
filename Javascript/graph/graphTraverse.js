const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

const depthFirst = (graphEx, source) => {
  const stack = [source]
  while (stack.length > 0) {
    const current = stack.pop()
    console.log(current)
    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
}

const depthFirstRecursive = (graphEx, source) => {
  console.log(source)

  for (let neighbor of graphEx[source]) {
    depthFirstRecursive(graphEx, neighbor)
  }

}

const breadthFirst = (grapfEx, source) => {
  const queue = [source]
  while (queue.length > 0) {
    const current = queue.shift()
    console.log(current)
    for (let neighbor of grapfEx[current]) {
      queue.push(neighbor)
    }
  }
}

// depthFirst(graph, 'a')
// depthFirstRecursive(graph, 'a')
breadthFirst(graph, 'a')