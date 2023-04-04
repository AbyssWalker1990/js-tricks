function binaryTreeNode (value) {
  let node = { value }
  node[Symbol.iterator] = function* depthFirst () {
    yield node.value
    if (node.leftChild) yield* node.leftChild[Symbol.iterator]()
    if (node.rightChild) yield* node.rightChild[Symbol.iterator]()
  }
  return node
}

const tree = (() => {
  const root = binaryTreeNode('root')
  root.leftChild = binaryTreeNode('branch left')
  root.rightChild = binaryTreeNode('branch right')
  root.leftChild.leftChild = binaryTreeNode('Leaf L1')
  root.leftChild.rightChild = binaryTreeNode('Leaf L2')
  root.rightChild.leftChild = binaryTreeNode('Leaf R1')
  return root
})()

console.log([...tree])