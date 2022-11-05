import test from 'ava';
import {empty, next} from './gol'

test('empty world is emptu', t => {
  t.deepEqual(next(empty), empty)
});
