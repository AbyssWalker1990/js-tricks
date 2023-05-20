import type { NodeObject, Builder } from './interfaces'

export class NodeBuilder implements Builder {
  private nodeTree!: NodeTree

  constructor (public nodesArr: NodeObject[]) {
    this.nodesArr = structuredClone(nodesArr)
    this.reset()
  }

  public reset = (): void => {
    this.nodeTree = new NodeTree()
  }

  public getTree = (): NodeTree => {
    const tree = this.nodeTree
    this.reset()
    return tree
  }

  public buildRoots = (): NodeObject[] => {
    const roots = this.nodesArr.filter(node => !node.parentId)
    roots.sort(this.sortBySiblings)
    this.removeSettledNodes(roots)
    return roots
  }

  public initBranches = (roots: NodeObject[]): void => {
    for (const root of roots) {
      const branch = this.buildBranch(root)
      this.nodeTree.tree.push(branch)
    }
  }

  public buildBranch = (rootNode: NodeObject): NodeObject => {
    const { nodeId } = rootNode
    const children = this.nodesArr
      .filter(child => child.parentId === nodeId)
      .map(child => {
        this.removeSettledNodes([child]) // Removing settled nodes from array for decreasing count of iteration
        return this.buildBranch(child)
      })
    children.sort(this.sortBySiblings)
    const branch = {
      ...rootNode,
      children
    }
    return branch
  }

  private sortBySiblings = (a: NodeObject, b: NodeObject) => {
    if (a.previousSiblingId === null) return -1
    if (b.previousSiblingId === null) return 1
    return Number(b.previousSiblingId) - Number(a.previousSiblingId)
  }

  private removeSettledNodes = (settledNodes: NodeObject[]) => {
    settledNodes.forEach(node => this.nodesArr.splice(this.nodesArr.indexOf(node), 1))
  }
}

class NodeTree {
  public tree: NodeObject[] = []

  public showTree = (): void => {
    console.log(JSON.stringify(this.tree, null, 2))
  }
}