const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W']
]


const islandCount = (grid) => {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < 5; c ++) {
      console.log(grid[r][c])
    }
  }
}

islandCount(grid)
