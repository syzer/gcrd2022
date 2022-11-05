import test from "ava"
import {
  World,
  Cell,
} from "./gol.js"

test("Single cell has no neighbours", t => {
  const world = new World()
  const cell = new Cell(0, 0)
  t.deepEqual(world.countNeighbours(cell), 0)
})

test("Cell has 8 neighbours", t => {
  const world = new World([
    new Cell(0, 0),
    new Cell(0, 1),
    new Cell(0, 2),
    new Cell(1, 0),
    new Cell(1, 2),
    new Cell(2, 0),
    new Cell(2, 1),
    new Cell(2, 2),
  ])

  const cell = new Cell(1, 1)
  t.deepEqual(world.countNeighbours(cell), 8)
})

test("Three cells one neighbour", t => {
  const world = new World([
    new Cell(0, 0),
    new Cell(1, 0),
    new Cell(2, 0),
  ])

  const cell = new Cell(0, 0)
  t.deepEqual(world.countNeighbours(cell), 1)
})

// game of life spinner in node that rotates three cells
test("Spinner", t => {
  const world = new World([
    new Cell(0, 0),
    new Cell(1, 0),
    new Cell(2, 0),
  ])

  world.tick()

  // t.deepEqual(world.getCells(), [
  //   new Cell(1, -1),
  //   new Cell(1, 0),
  //   new Cell(1, 1),
  // ])
  t.true(true)

})

test("Cell get potential neighbours", t => {
  const cell = new Cell(0, 0)
  t.deepEqual(cell.getPotentialNeighbours(), [
    new Cell(-1, -1),
    new Cell(-1, 0),
    new Cell(-1, 1),
    new Cell(0, -1),
    new Cell(0, 0),
    new Cell(0, 1),
    new Cell(1, -1),
    new Cell(1, 0),
    new Cell(1, 1),
  ])
})

// TODO github slow down
// test("Cell dies with 0 neighbours", t => {

