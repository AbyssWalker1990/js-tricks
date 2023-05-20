"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NodeBuilder_1 = require("./NodeBuilder");
const Director_1 = __importDefault(require("./Director"));
const nodes_1 = __importDefault(require("./nodes"));
function main() {
    const builder = new NodeBuilder_1.NodeBuilder(nodes_1.default);
    const director = new Director_1.default();
    director.setBuilder(builder);
    director.makeNodeTree();
    builder.getTree().showTree();
}
main();
