export interface Builder {
  buildRoots(): NodeObject[]
  initBranches(roots: NodeObject[]): void
  buildBranch(rootNode: NodeObject): NodeObject
}

export type NodeObject = {
  nodeId: string,
  name: string,
  parentId: string | null,
  previousSiblingId: string | null,
  children?: NodeObject[] | []
}