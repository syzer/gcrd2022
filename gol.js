import { uniq } from 'ramda'

export class World {
  constructor(cells = []) {
    this.cells = cells
  }

  countNeighbours(cell) {
    return this.cells.filter(c =>
      c.isNeighbour(cell)).length
  }

  getCells() {
    return this.cells
  }

  tick() {
    // const potentialCells = this.cells.reduce((acc, cell) => {
    //
    // }, [])

    let potentialCells = uniq(this.cells.flatMap(cell =>
      cell.getPotentialNeighbours()))

    console.error(potentialCells)

    // this.cells = this.cells.map(cell => {
    //   const neighbours = this.countNeighbours(cell)
    //
    //   return
    // })
  }

}

export class Cell {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  isNeighbour(cell) {
    return Math.abs(this.x - cell.x) <= 1 &&
      Math.abs(this.y - cell.y) <= 1 &&
      !(this.x === cell.x && this.y === cell.y)
  }

  tick(numbNeighbours) {
    if (numbNeighbours === 2) {
      return this
    }
    if (numbNeighbours === 3) {
      return this
    }
    return null
  }

  getPotentialNeighbours() {
    const potentialNeighbours = []
    for (let x = this.x - 1; x <= this.x + 1; x++) {
      for (let y = this.y - 1; y <= this.y + 1; y++) {
        potentialNeighbours.push(new Cell(x, y))
      }
    }
    return potentialNeighbours
  }

}
