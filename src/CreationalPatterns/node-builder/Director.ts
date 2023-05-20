import type { Builder } from './interfaces'

class Director {
  private builder!: Builder

  public setBuilder = (builder: Builder) => {
    this.builder = builder
  }

  public makeNodeTree = () => {
    const roots = this.builder.buildRoots()
    this.builder.initBranches(roots)
  }
}

export default Director