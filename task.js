// Input data
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

// Process input and generate output
const output = [];

// Function to find node by nodeId
function findNodeById(nodeId) {
  return input.find(node => node.nodeId === nodeId);
}

// Function to recursively build the tree structure
function buildTree(node) {
  const { nodeId, name, parentId, previousSiblingId } = node;
  const children = input
    .filter(child => child.parentId === nodeId)
    .map(child => buildTree(child));

  console.log('Children: ', children)
  children.sort((a, b) => {
    if (a.previousSiblingId === null) return -1;
    if (b.previousSiblingId === null) return 1;
    return b.previousSiblingId.localeCompare(a.previousSiblingId);
  })
  console.log('Children SORTED: ', children)
  console.log('--------------------------------------------------- ')


  const outputNode = {
    nodeId,
    name,
    parentId,
    previousSiblingId,
    children
  };

  return outputNode;
}

// Build the tree structure starting from the root nodes
const roots = input.filter(node => !node.parentId)
console.log('ROOTS before sort: ', roots)
console.log('----------------------------')
roots.sort((a, b) => {
  if (a.previousSiblingId === null) return -1;
  if (b.previousSiblingId === null) return 1;
  return b.previousSiblingId - a.previousSiblingId;
});
console.log('ROOTS: ', roots)
for (const root of roots) {
  const node = buildTree(root);
  output.push(node);
}

// Output data
// console.log(JSON.stringify(output, null, 2));