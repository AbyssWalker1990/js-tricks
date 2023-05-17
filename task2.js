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
];

// Sort nodes based on hierarchy and previous siblings
input.sort((a, b) => {
  const parentA = input.find(node => node.nodeId === a.parentId);
  const parentB = input.find(node => node.nodeId === b.parentId);

  if (parentA === parentB) {
    const prevSiblingA = input.find(node => node.nodeId === a.previousSiblingId);
    const prevSiblingB = input.find(node => node.nodeId === b.previousSiblingId);

    if (prevSiblingA === prevSiblingB) {
      return a.nodeId.localeCompare(b.nodeId);
    }

    if (!prevSiblingA) return 1;
    if (!prevSiblingB) return -1;

    return prevSiblingA.nodeId.localeCompare(prevSiblingB.nodeId);
  }

  if (!parentA) return -1;
  if (!parentB) return 1;

  return parentA.nodeId.localeCompare(parentB.nodeId);
});

// Process input and generate output
const output = [];

// Function to recursively build the tree structure
function buildTree(nodeId, parentId) {
  const children = input
    .filter(node => node.parentId === nodeId)
    .map(node => {
      return {
        ...node,
        children: buildTree(node.nodeId, node.parentId)
      };
    });

  return children;
}

// Build the tree structure starting from the root nodes
const roots = input.filter(node => !node.parentId && !node.previousSiblingId);
for (const root of roots) {
  const node = {
    ...root,
    children: buildTree(root.nodeId, root.parentId)
  };
  output.push(node);
}

// Output data
console.log(JSON.stringify(output, null, 2));