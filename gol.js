import assert from 'assert'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const grid = [[0, 0, 0],
              [0, 1, 0]]



const calc_alive_neighbors = (grid, x, y) => {
  // let count = 0
  // for (let i = -1; i < 2; i++) {
  //   for (let j = -1; j < 2; j++) {
  //     if (i === 0 && j === 0) continue
  //     if (grid[x + i] && grid[x + i][y + j] === 1) count++
  //   }
  // }
  // return count
  let z = grid.filter((_, i) => i >= x - 1 && i <= x + 1)
    .map(row => row.filter((_, j) => j >= y - 1 && j <= y + 1))

  console.log(x)

  return grid[x][y] || 0
}



assert(calc_alive_neighbors(grid, 0, 10000 ) === 0)
assert(calc_alive_neighbors(grid, 0, 1 ) === 1, calc_alive_neighbors(grid, 0, 1 ))
