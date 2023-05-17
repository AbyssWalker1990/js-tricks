const input = [
  {
    "nodeId": "4",
    "name": "Four",
    "parentId": "2",
    "previousSiblingId": "6"
  },
  {
    "nodeId": "8",
    "name": "Eight",
    "parentId": "7",
    "previousSiblingId": null
  },
  {
    "nodeId": "2",
    "name": "Two",
    "parentId": "1",
    "previousSiblingId": null
  },
  {
    "nodeId": "6",
    "name": "Six",
    "parentId": "2",
    "previousSiblingId": null
  },
  {
    "nodeId": "3",
    "name": "Three",
    "parentId": null,
    "previousSiblingId": null
  },
  {
    "nodeId": "5",
    "name": "Five",
    "parentId": "4",
    "previousSiblingId": null
  },
  {
    "nodeId": "7",
    "name": "Seven",
    "parentId": null,
    "previousSiblingId": "1"
  },
  {
    "nodeId": "1",
    "name": "One",
    "parentId": null,
    "previousSiblingId": "3"
  }
]

class NodeSorter {
  #sortedNodes
  constructor(unsortedNodes) {
    this.unsortedNodes = structuredClone(unsortedNodes)
    this.#sortedNodes = []
    this.inputChecker = new InputChecker()
  }

  sortNodes = () => {
    this.#handleInputErrors()
    this.#buildRoots()
    return this.#getOutputAsArray()
  }

  showOutput = () => {
    console.log(JSON.stringify(this.#sortedNodes, null, 2))
  }

  // Constructing the base layer with parents node
  #buildRoots = () => {
    const roots = this.unsortedNodes.filter(node => !node.parentId)
    roots.sort(this.#sortBySiblings)
    this.#removeSettledNodes(roots) // Can remove settled parent nodes and decrease count of further iterations
    for (const root of roots) {
      const node = this.#buildTree(root)
      this.#sortedNodes.push(node)
    }
  }

  #buildTree = (node) => {
    const { nodeId } = node;
    const children = this.unsortedNodes
      .filter(child => child.parentId === nodeId)
      .map(child => this.#buildTree(child))
   
    children.sort(this.#sortBySiblings)
    const outputNode = {
      ...node,
      children
    }
 
    return outputNode; 
  }

  #sortBySiblings = (a, b) => {
    if (a.previousSiblingId === null) return -1
    if (b.previousSiblingId === null) return 1
    return b.previousSiblingId - a.previousSiblingId
  }

  #removeSettledNodes = (settledNodes) => {
    settledNodes.forEach(node => this.unsortedNodes.splice(this.unsortedNodes.indexOf(node), 1))
  }

  // Just want to separate error handling 
  #handleInputErrors = () => {
    try {
      this.inputChecker.isValidInput(this.unsortedNodes)
    } catch (error) {
      console.log(error)
    }
  }

  #getOutputAsArray = () => {
    return this.#sortedNodes
  }
}

// Checking types of crucial properties for building tree
class InputChecker {
  isValidInput = (input) => {
    input.forEach(node => {
      if (isNaN(Number(node.nodeId))) throw new Error('Invalid type of nodeId')
      if (isNaN(Number(node.parentId))) throw new Error('Invalid type of parentId')
      if (isNaN(Number(node.previousSiblingId))) throw new Error('Invalid type of previousSiblingId')
    })
  }
}

const nodeSorter = new NodeSorter(input)
const result = nodeSorter.sortNodes()
nodeSorter.showOutput()

