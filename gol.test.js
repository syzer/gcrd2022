import test from 'ava';
import { empty, next } from './gol.js'

test('empty world is empty', t => {
  t.deepEqual(next(empty), empty)
  t.deepEqual(next(next(empty)), empty)
  t.deepEqual(next(next(empty)), next(empty))
})

test('single cell dies', t => {
  t.deepEqual(next(singleCell), empty)
})
/* eslint-ignore */
