const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

const largestComponent = (graph) => {
  const visited = new Set()
  let longest = 0
  for (let node in graph) {
    const size = exploreSize(graph, node, visited)
    if (size > longest) longest = size
  }
  return longest
}

const exploreSize = (graph, node, visited) => {
  if (visited.has(String(node))) return 0
  visited.add(String(node))
  let size = 1
  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited)
  }
  return size
}

console.log(largestComponent(graph))






// const findLargest = (graph) => {
//   const visited = new Set()
//   let count = 0
//   let max = 0
//   for (let node in graph) {
//     let length = explore(graph, node, visited, count)
//     if (max < length) {
//       max = length
//       visited.clear()
//     }
//   }
//   return max
// }

// const explore = (graph, current, visited, count) => {
//   if (visited.has(String(current))) return
//   visited.add(String(current))
//   console.log(visited)

//   for (let neighbor in graph[current]) {
//     if (!visited.has(neighbor)) {
//       explore(graph, neighbor, visited, count++)
//     }
//   }
//   return count
// }

// console.log(findLargest(graph))
