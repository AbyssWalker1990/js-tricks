"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = __importDefault(require("./nodes"));
class NodeBuilder {
    constructor(nodesArr) {
        this.nodesArr = nodesArr;
        this.reset = () => {
            this.nodeTree = new NodeTree();
        };
        this.buildRoots = (nodesArr) => {
            const roots = nodes_1.default.filter(node => !node.parentId);
            roots.sort(this.sortBySiblings);
            this.(roots); // Removing parent nodes from array for decreasing count of iteration while constructing branches
            this.(roots);
        };
        this.initBranches = () => {
        };
        this.buildBranch = () => {
        };
        this.sortBySiblings = (a, b) => {
            if (a.previousSiblingId === null)
                return -1;
            if (b.previousSiblingId === null)
                return 1;
            return Number(b.previousSiblingId) - Number(a.previousSiblingId);
        };
        this.nodesArr = structuredClone(nodesArr);
    }
}
class NodeTree {
    constructor() {
        this.tree = [];
        this.showTree = () => {
            console.log(JSON.stringify(this.tree, null, 2));
        };
    }
}
