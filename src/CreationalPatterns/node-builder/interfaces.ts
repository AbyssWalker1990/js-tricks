export interface Builder {
  buildRoots(nodesArr: NodeObject[]): void
  initBranches(): void
  buildBranch(): NodeObject
}

export type NodeObject = {
  nodeId: string,
  name: string,
  parentId: string | null,
  previousSiblingId: string | null,
  children?: NodeObject[] | []
}