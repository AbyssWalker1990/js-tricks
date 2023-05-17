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
];

class NodeSorter {
  #sortedNodes
  constructor(nodeArr) {
    this.nodeArr = structuredClone(nodeArr)
    this.#sortedNodes = []
    this.inputChecker = new InputChecker()
    this.inputChecker.isValidInput(this.nodeArr)
  }

  sortNodes = function () {
    this.#buildRoots(this.nodeArr)
  }

  showOutput = () => {
    console.log(JSON.stringify(this.#sortedNodes, null, 2))
  }

  #buildRoots = (nodes) => {
    const roots = input.filter(node => !node.parentId);
    roots.sort(this.#sortBySiblings)
    for (const root of roots) {
      const node = this.#buildTree(root);
      this.#sortedNodes.push(node);
    }
  }

  #buildTree = (node) => {
    const { nodeId } = node;
    const children = this.nodeArr
      .filter(child => child.parentId === nodeId)
      .map(child => this.#buildTree(child));
    children.sort(this.#sortBySiblings)

    const outputNode = {
      ...node,
      children
    };
    return outputNode; 
  }

  #sortBySiblings = (a, b) => {
    if (a.previousSiblingId === null) return -1;
    if (b.previousSiblingId === null) return 1;
    return b.previousSiblingId - a.previousSiblingId;
  }

}

class InputChecker {
  isValidInput = (input) => {
    input.forEach(node => {
      console.log(Number(node.nodeId))
      if (isNaN(Number(node.nodeId))) throw new Error('Invalid type of nodeId')
      if (isNaN(Number(node.parentId))) throw new Error('Invalid type of parentId')
      console.log('input OK')
    })
  }
}

const nodeSorter = new NodeSorter(input)
nodeSorter.sortNodes()
nodeSorter.showOutput()