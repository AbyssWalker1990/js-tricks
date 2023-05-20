import nodes from './nodes'
import type { NodeObject, Builder } from './interfaces'

class NodeBuilder implements Builder {
  private nodeTree!: NodeTree

  constructor (public nodesArr: NodeObject[]) {
    this.nodesArr = structuredClone(nodesArr)
  }

  public reset = (): void => {
    this.nodeTree = new NodeTree()
  }

  public buildRoots = (nodesArr: NodeObject[]): void => {
    const roots = nodes.filter(node => !node.parentId)
    roots.sort(this.sortBySiblings)
    this.#removeSettledNodes(roots)  // Removing parent nodes from array for decreasing count of iteration while constructing branches
    this.#initBranches(roots)
  }

  public initBranches = (): void => {
    
  }

  public buildBranch = (): NodeObject => {
    
  }

  private sortBySiblings = (a: NodeObject, b: NodeObject) => {
    if (a.previousSiblingId === null) return -1
    if (b.previousSiblingId === null) return 1
    return Number(b.previousSiblingId) - Number(a.previousSiblingId)
  }
}

class NodeTree {
  public tree: NodeObject[] = []

  public showTree = (): void => {
    console.log(JSON.stringify(this.tree, null, 2))
  }
}