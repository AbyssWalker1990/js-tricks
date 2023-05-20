"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeBuilder = void 0;
class NodeBuilder {
    constructor(nodesArr) {
        this.nodesArr = nodesArr;
        this.reset = () => {
            this.nodeTree = new NodeTree();
        };
        this.getTree = () => {
            const tree = this.nodeTree;
            this.reset();
            return tree;
        };
        this.buildRoots = () => {
            const roots = this.nodesArr.filter(node => !node.parentId);
            roots.sort(this.sortBySiblings);
            this.removeSettledNodes(roots);
            return roots;
        };
        this.initBranches = (roots) => {
            for (const root of roots) {
                const branch = this.buildBranch(root);
                this.nodeTree.tree.push(branch);
            }
        };
        this.buildBranch = (rootNode) => {
            const { nodeId } = rootNode;
            const children = this.nodesArr
                .filter(child => child.parentId === nodeId)
                .map(child => {
                this.removeSettledNodes([child]); // Removing settled nodes from array for decreasing count of iteration
                return this.buildBranch(child);
            });
            children.sort(this.sortBySiblings);
            const branch = Object.assign(Object.assign({}, rootNode), { children });
            return branch;
        };
        this.sortBySiblings = (a, b) => {
            if (a.previousSiblingId === null)
                return -1;
            if (b.previousSiblingId === null)
                return 1;
            return Number(b.previousSiblingId) - Number(a.previousSiblingId);
        };
        this.removeSettledNodes = (settledNodes) => {
            settledNodes.forEach(node => this.nodesArr.splice(this.nodesArr.indexOf(node), 1));
        };
        this.nodesArr = structuredClone(nodesArr);
        this.reset();
    }
}
exports.NodeBuilder = NodeBuilder;
class NodeTree {
    constructor() {
        this.tree = [];
        this.showTree = () => {
            console.log(JSON.stringify(this.tree, null, 2));
        };
    }
}
