import test from 'ava';
import { empty, next } from './gol'

test('empty world is empty', t => {
  t.deepEqual(next(empty), empty)
  t.deepEqual(next(next(empty)), empty)
  t.deepEqual(next(next(empty)), next(empty))
})

/* eslint-ignore */
