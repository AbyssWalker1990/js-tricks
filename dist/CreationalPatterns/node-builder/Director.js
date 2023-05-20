"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Director {
    constructor() {
        this.setBuilder = (builder) => {
            this.builder = builder;
        };
        this.makeNodeTree = () => {
            const roots = this.builder.buildRoots();
            this.builder.initBranches(roots);
        };
    }
}
exports.default = Director;
