import test from "ava"
import { empty, next, singleCell, countAliveCells } from "./gol.js"

test("empty world is empty", (t) => {
  t.deepEqual(next(empty), empty)
  t.deepEqual(next(next(empty)), empty)
  t.deepEqual(next(next(empty)), next(empty))
})

test("single cell dies", (t) => {
  t.deepEqual(next(singleCell), empty)
  t.notDeepEqual(next(empty), singleCell)
})

test("how many we got", (t) => {
  t.deepEqual(countAliveCells(empty, 0))
  t.deepEqual(countAliveCells(singleCell, 1))
  t.deepEqual(countAliveCells(next(singleCell), 0))
  t.deepEqual(countAliveCells(next(empty), 0))
})
