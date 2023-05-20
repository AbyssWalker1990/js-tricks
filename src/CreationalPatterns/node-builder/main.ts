import { NodeBuilder } from "./NodeBuilder"
import Director from "./Director"
import nodes from './nodes'

function main (): void {
  const builder = new NodeBuilder(nodes)
  const director = new Director()

  director.setBuilder(builder)
  director.makeNodeTree()
  builder.getTree().showTree()
}

main()